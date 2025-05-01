import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-guiche',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './guiche.page.html',
  styleUrls: ['./guiche.page.scss'],
})
export class GuichePage {
  senhas: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  chamarProximaSenha() {
    const prox = this.ticketService.chamarProximaSenha(1);
    if (prox) {
      this.senhas.push(prox);
    } else {
      alert('Não há senhas na fila!');
    }
  }

  atenderSenha() {
    const senha = this.senhas.shift();
    if (senha) {
      this.ticketService.atenderSenha(senha.codigo);
    }
  }
}
