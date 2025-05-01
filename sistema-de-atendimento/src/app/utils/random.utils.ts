import { TipoSenha } from '../models/enums';

export function randomizeTempoAtendimento(tipo: TipoSenha): number {
  const minutos = {
    SP: 15,
    SG: 5,
    SE: 1,
  };

  switch (tipo) {
    case TipoSenha.PRIORITARIA:
      return (minutos.SP + randomBetween(-5, 5)) * 60;
    case TipoSenha.GERAL:
      return (minutos.SG + randomBetween(-3, 3)) * 60;
    case TipoSenha.EXAME:
      return Math.random() < 0.95 ? minutos.SE * 60 : 5 * 60;
    default:
      return 0;
  }
}

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
