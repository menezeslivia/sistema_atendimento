import { TipoSenha } from '../models/enums';

// Retorna tempo em segundos
export function randomizeTempoAtendimento(tipo: TipoSenha): number {
  const minutos = {
    SP: 15, // Prioritária
    SG: 5,  // Geral
    SE: 1,  // Exames
  };

  switch (tipo) {
    case TipoSenha.PRIORITARIA:
      // +/- 5 minutos aleatórios
      return (minutos.SP + randomBetween(-5, 5)) * 60;
    case TipoSenha.GERAL:
      // +/- 3 minutos aleatórios
      return (minutos.SG + randomBetween(-3, 3)) * 60;
    case TipoSenha.EXAME:
      // 95% dos casos: 1 minuto, 5%: 5 minutos
      return Math.random() < 0.95 ? minutos.SE * 60 : 5 * 60;
    default:
      return 0;
  }
}

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
