import {StatusTicket } from './enums';

export type TipoSenha = 'SP' | 'SG' | 'SE';

export interface Ticket {
  codigo: string;          // Ex: 250428-SP001
  tipo: TipoSenha;
  status: StatusTicket;
  dataEmissao: Date;
  dataAtendimento?: Date;  // Pode ser undefined se não foi atendido ainda
  guicheAtendimento?: number; // Guichê que atendeu
}
