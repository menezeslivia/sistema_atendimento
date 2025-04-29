// src/app/pages/painel/painel.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket.model';
import { StatusTicket } from 'src/app/models/enums';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit, OnDestroy {
  ultimosChamados: Ticket[] = [];
  sub!: Subscription;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.sub = interval(1000).subscribe(()=> this.atualizar());
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private atualizar() {
    const todos = this.ticketService.getAllTickets()
      .filter(t=> t.status===StatusTicket.CHAMADO || t.status===StatusTicket.ATENDIDO)
      .sort((a,b)=>{
        const ta = (a.dataAtendimento||a.dataEmissao).getTime();
        const tb = (b.dataAtendimento||b.dataEmissao).getTime();
        return tb - ta;
      });
    this.ultimosChamados = todos.slice(0,5);
  }
}
