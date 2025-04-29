import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket, TipoSenha } from 'src/app/models/ticket.model';
import { StatusTicket } from 'src/app/models/enums';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage implements OnInit {
  form: FormGroup;
  tickets: Ticket[] = [];
  filtered: Ticket[] = [];
  tipos: TipoSenha[] = ['SP', 'SG', 'SE'];

  totalEmitidas = 0;
  totalAtendidas = 0;
  emitidasPorTipo: Record<TipoSenha, number> = { SP: 0, SG: 0, SE: 0 };
  atendidasPorTipo: Record<TipoSenha, number> = { SP: 0, SG: 0, SE: 0 };

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService
  ) {
    this.form = this.fb.group({
      mode: new FormControl<'daily' | 'monthly'>('daily'),
      date: new FormControl<string>(new Date().toISOString().substring(0,10)),
      month: new FormControl<string>(new Date().toISOString().substring(0,7)),
    });
  }

  ngOnInit() {
    this.tickets = this.ticketService.getAllTickets();
    this.applyFilters();
    this.form.valueChanges.subscribe(() => this.applyFilters());
  }

  applyFilters() {
    const mode = this.form.get('mode')!.value;
    const date = this.form.get('date')!.value;
    const month = this.form.get('month')!.value;
    let start: Date, end: Date;
    if (mode === 'daily') {
      start = new Date(date + 'T00:00:00');
      end = new Date(date + 'T23:59:59');
    } else {
      const [year, mon] = month.split('-').map(Number);
      start = new Date(year, mon - 1, 1, 0, 0, 0);
      end = new Date(year, mon - 1, new Date(year, mon, 0).getDate(), 23, 59, 59);
    }
    this.filtered = this.tickets.filter(t => {
      const em = new Date(t.dataEmissao);
      return em >= start && em <= end;
    });
    this.calculateSummary();
  }

  private calculateSummary() {
    this.totalEmitidas = this.filtered.length;
    this.totalAtendidas = this.filtered.filter(t => t.status === StatusTicket.ATENDIDO).length;
    this.emitidasPorTipo = { SP: 0, SG: 0, SE: 0 };
    this.atendidasPorTipo = { SP: 0, SG: 0, SE: 0 };
    this.filtered.forEach(t => {
      this.emitidasPorTipo[t.tipo]++;
      if (t.status === StatusTicket.ATENDIDO) this.atendidasPorTipo[t.tipo]++;
    });
  }
}


