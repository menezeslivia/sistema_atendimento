import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';
import { Ticket, TipoSenha } from '../../models/ticket.model';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './totem.page.html',
  styleUrls: ['./totem.page.scss'],
})
export class TotemPage {

  constructor(
    private ticketService: TicketService,
    private toastController: ToastController
  ) {}

  async emitirSenha(tipo: TipoSenha) {
    this.ticketService.emitirTicket(tipo);
    const toast = await this.toastController.create({
      message: `Senha ${tipo} emitida com sucesso!`,
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  
}
