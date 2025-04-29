// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Ticket, TipoSenha } from '../models/ticket.model';
import { StatusTicket } from '../models/enums';
import { formatDate } from '../utils/date.utils';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private readonly STORAGE_KEY = 'tickets';
  private sequencias: Record<TipoSenha, number> = { SP: 0, SG: 0, SE: 0 };
  private ultimoAtendidoPrioritario = false;

  constructor(private storage: StorageService) {
    this.zerarSequenciasHoje();
  }

  private zerarSequenciasHoje() {
    const hoje = formatDate(new Date(), 'YYMMDD');
    this.sequencias = { SP: 0, SG: 0, SE: 0 };
    this.getAllTickets()
      .filter(t => t.codigo.startsWith(hoje))
      .forEach(t => this.sequencias[t.tipo]++);
  }

  /** lê e reconstrói Dates */
  getAllTickets(): Ticket[] {
    const raw = this.storage.getItem<any[]>(this.STORAGE_KEY) || [];
    return raw.map(r => ({
      ...r,
      dataEmissao: new Date(r.dataEmissao),
      dataAtendimento: r.dataAtendimento ? new Date(r.dataAtendimento) : undefined
    }));
  }

  private salvarAll(tk: Ticket[]) {
    this.storage.setItem(this.STORAGE_KEY, tk);
  }

  emitirTicket(tipo: TipoSenha): Ticket {
    const now = new Date();
    const prefix = formatDate(now, 'YYMMDD');
    const seq = (++this.sequencias[tipo]).toString().padStart(3, '0');
    const codigo = `${prefix}-${tipo}${seq}`;
    const ticket: Ticket = { codigo, tipo, status: StatusTicket.EMITIDO, dataEmissao: now };
    const all = this.getAllTickets();
    all.push(ticket);
    this.salvarAll(all);
    return ticket;
  }

  chamarProximaSenha(guiche: number): Ticket | null {
    const all = this.getAllTickets();
    const sp = all.filter(t=>t.tipo==='SP' && t.status===StatusTicket.EMITIDO);
    const se = all.filter(t=>t.tipo==='SE' && t.status===StatusTicket.EMITIDO);
    const sg = all.filter(t=>t.tipo==='SG' && t.status===StatusTicket.EMITIDO);

    let next = !this.ultimoAtendidoPrioritario && sp.length ? sp[0] 
             : (se.length ? se[0] : sg[0]);
    this.ultimoAtendidoPrioritario = next?.tipo==='SP';

    if (!next) return null;

    next.status = StatusTicket.CHAMADO;
    next.guicheAtendimento = guiche;
    next.dataAtendimento = new Date();

    this.salvarAll(all.map(t=> t.codigo===next!.codigo ? next! : t ));
    return next;
  }

  atenderSenha(codigo: string) {
    const all = this.getAllTickets().map(t => {
      if (t.codigo===codigo) {
        t.status = StatusTicket.ATENDIDO;
        t.dataAtendimento = new Date();
      }
      return t;
    });
    this.salvarAll(all);
  }
}
