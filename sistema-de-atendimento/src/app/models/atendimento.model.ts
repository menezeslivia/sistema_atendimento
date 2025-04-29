import { Ticket } from './ticket.model';

export interface Atendimento {
  ticket: Ticket;
  tempoAtendimento: number; // Em segundos
  dataInicio: Date;
  dataFim: Date;
  guiche: number;
}
