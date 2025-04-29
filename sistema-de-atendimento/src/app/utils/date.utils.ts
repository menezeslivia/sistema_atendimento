export function formatDate(date: Date, format: 'YYMMDD'): string {
    const year = date.getFullYear().toString().slice(-2); // últimos 2 dígitos do ano
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // mês começa do 0
    const day = date.getDate().toString().padStart(2, '0');
  
    if (format === 'YYMMDD') {
      return `${year}${month}${day}`;
    }
  
    throw new Error('Formato de data não suportado');
  }
  