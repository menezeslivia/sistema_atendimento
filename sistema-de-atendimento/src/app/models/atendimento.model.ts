import { Ticket } from './ticket.model';

export interface Atendimento {
  ticket: Ticket;
  tempoAtendimento: number;
  dataInicio: Date;
  dataFim: Date;
  guiche: number;
}
