import { dayEnum, monthEnum } from '@/enums';

/**
 * Normaliza uma string de data para evitar problemas de fuso horário ao instanciar `Date`.
 *
 * Se a string de data contiver um marcador de tempo (`T`) com hora `"00:00:00"`,
 * ela será substituída por `"12:00:00"` para centralizar o horário no meio do dia
 * e evitar que o `Date` retorne o dia anterior em alguns fusos.
 *
 * Se a string não contiver `T`, será adicionado `"T12:00:00"` no final.
 *
 * @param dateRoot - A data em formato ISO (`YYYY-MM-DD` ou `YYYY-MM-DDTHH:mm:ss`).
 * @returns A string de data ajustada com horário `"12:00:00"` embutido.
 *
 * @example
 * ```ts
 * DateTimeFormat('2025-05-21') // "2025-05-21T12:00:00"
 * DateTimeFormat('2025-05-21T00:00:00') // "2025-05-21T12:00:00"
 * DateTimeFormat('2025-05-21T15:30:00') // "2025-05-21T15:30:00"
 * ```
 */
export function DateTimeFormat(dateRoot: string): string {
  const normalizedDate: string = dateRoot.includes('T')
    ? dateRoot.replace(/T00:00:00.*/, 'T12:00:00')
    : `${dateRoot}T12:00:00`;

  return normalizedDate;
}

/**
 * Formata uma string de data para um formato curto e legível em português.
 * 
 * Exemplo de retorno:
 * - "Quarta-feira, 05 de Junho de 2025"
 * - "Quarta-feira, 05 de Junho de 2025 - às 14:30" (com `withTime` ativado)
 * 
 * @param dateRoot - Uma string representando a data (ISO ou semelhante). Será formatada com `DateTimeFormat` antes do uso.
 * @param withTime - (Opcional) Se `true`, adiciona horário (hh:mm) ao final da string formatada. Padrão: `false`.
 * @returns Uma string formatada com o dia da semana, dia do mês, mês por extenso e ano, opcionalmente com o horário.
 */
export function DateFormatShort(dateRoot: string, withTime = false): string {
  dateRoot = DateTimeFormat(dateRoot);

  const data = new Date(dateRoot);

  const date = String(data.getDate()).padStart(2, '0');

  const day = dayEnum[data.getDay()];
  const month = monthEnum[data.getMonth()];
  const year = data.getFullYear();

  let formattedDate = `${day}, ${date} de ${month} de ${year}`;

  if (withTime) {
    const hours = String(data.getHours()).padStart(2, '0');
    const minutes = String(data.getMinutes()).padStart(2, '0');
    formattedDate += ` - às ${hours}:${minutes}`;
  }

  return formattedDate;
}
