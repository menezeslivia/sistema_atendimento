import {StatusTicket } from './enums';

export type TipoSenha = 'SP' | 'SG' | 'SE';

export interface Ticket {
  codigo: string;         
  tipo: TipoSenha;
  status: StatusTicket;
  dataEmissao: Date;
  dataAtendimento?: Date; 
  guicheAtendimento?: number;
}
