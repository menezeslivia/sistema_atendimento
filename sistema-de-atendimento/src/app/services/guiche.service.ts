import { Injectable } from '@angular/core';
import { TicketService } from './ticket.service';
import { Ticket } from '../models/ticket.model';
import { TipoSenha, StatusTicket } from '../models/enums';
import { randomizeTempoAtendimento } from '../utils/random.utils'; // Vamos criar já já.

@Injectable({
  providedIn: 'root',
})
export class GuicheService {
  private ultimoAtendidoPrioritario = false;

  constructor(private ticketService: TicketService) {}

  chamarProximoTicket(guiche: number): Ticket | null {
    const tickets = this.ticketService.getAllTickets();
    const filaPrioritaria = tickets.filter(t => t.tipo === TipoSenha.PRIORITARIA && t.status === StatusTicket.EMITIDO);
    const filaExame = tickets.filter(t => t.tipo === TipoSenha.EXAME && t.status === StatusTicket.EMITIDO);
    const filaGeral = tickets.filter(t => t.tipo === TipoSenha.GERAL && t.status === StatusTicket.EMITIDO);

    let ticketParaChamar: Ticket | undefined;

    if (!this.ultimoAtendidoPrioritario) {
      if (filaPrioritaria.length > 0) {
        ticketParaChamar = filaPrioritaria[0];
        this.ultimoAtendidoPrioritario = true;
      }
    } else {
      ticketParaChamar = filaExame[0] || filaGeral[0];
      this.ultimoAtendidoPrioritario = false;
    }

    if (ticketParaChamar) {
      ticketParaChamar.status = StatusTicket.CHAMADO;
      ticketParaChamar.guicheAtendimento = guiche;
      ticketParaChamar.dataAtendimento = new Date();
      this.ticketService.atualizarTicket(ticketParaChamar);
      return ticketParaChamar;
    }

    return null;
  }
}
