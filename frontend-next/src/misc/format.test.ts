import { DateTimeFormat, DateFormatShort, slugify } from './format';
import { dayEnum, monthEnum } from '@/enums';

describe('DateTimeFormat', () => {
  it('deve adicionar T12:00:00 quando não houver T na string', () => {
    expect(DateTimeFormat('2025-05-21')).toBe('2025-05-21T12:00:00');
  });

  it('deve substituir T00:00:00 por T12:00:00', () => {
    expect(DateTimeFormat('2025-05-21T00:00:00')).toBe('2025-05-21T12:00:00');
  });

  it('deve manter horário diferente de 00:00:00', () => {
    expect(DateTimeFormat('2025-05-21T15:30:00')).toBe('2025-05-21T15:30:00');
  });

  it('deve substituir mesmo se houver milissegundos depois do 00:00:00', () => {
    expect(DateTimeFormat('2025-05-21T00:00:00.123Z')).toBe('2025-05-21T12:00:00');
  });
});

describe('DateFormatShort', () => {
  it('deve formatar a data sem horário', () => {
    const date = '2025-06-05';
    const expected = `${dayEnum[new Date(DateTimeFormat(date)).getDay()]}, 05 de ${monthEnum[new Date(DateTimeFormat(date)).getMonth()]} de 2025`;
    expect(DateFormatShort(date)).toBe(expected);
  });

  it('deve formatar a data com horário', () => {
    const date = '2025-06-05T14:30:00';
    const dt = new Date(DateTimeFormat(date));
    const day = dayEnum[dt.getDay()];
    const month = monthEnum[dt.getMonth()];
    const formatted = `${day}, 05 de ${month} de 2025 - às 14:30`;
    expect(DateFormatShort(date, true)).toBe(formatted);
  });
});

describe('slugify', () => {
  it('deve transformar texto em minúsculas e remover acentos', () => {
    expect(slugify('Olá Mundo!')).toBe('ola-mundo');
  });

  it('deve substituir espaços por hífens', () => {
    expect(slugify('Meu Primeiro Post')).toBe('meu-primeiro-post');
  });

  it('deve remover caracteres especiais e duplicados', () => {
    expect(slugify('Vue.js & TypeScript')).toBe('vuejs-typescript');
  });

  it('deve remover hífens no início e fim', () => {
    expect(slugify('---Olá Mundo---')).toBe('ola-mundo');
  });

  it('deve remover múltiplos hífens consecutivos', () => {
    expect(slugify('Olá    Mundo')).toBe('ola-mundo');
  });
});
