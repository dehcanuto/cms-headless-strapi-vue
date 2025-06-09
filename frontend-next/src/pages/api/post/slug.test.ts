import handler from './[slug]';
import type { NextApiRequest, NextApiResponse } from 'next';
import api from '@/services/api';

jest.mock('@/services/api');

describe('API route /api/[slug]', () => {
  let req: Partial<NextApiRequest>;
  let res: Partial<NextApiResponse>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock }));

    req = {
      method: 'GET',
      query: { slug: 'meu-post' },
    };

    res = {
      status: statusMock,
      json: jsonMock,
    };

    (api.get as jest.Mock).mockReset();
  });

  it('deve retornar dados da API externa quando método for GET', async () => {
    const mockData = { title: 'Meu Post', content: 'Conteúdo' };
    (api.get as jest.Mock).mockResolvedValue({ data: mockData });

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(api.get).toHaveBeenCalledWith('/api/post/meu-post');
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(mockData);
  });

  it('deve retornar 405 para métodos diferentes de GET', async () => {
    req.method = 'POST';

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(405);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Method not allowed' });
  });

  it('deve retornar 500 e logar erro quando api.get falhar', async () => {
    const errorMessage = 'Falha na API';
    (api.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Erro interno ao comunicar com o Strapi' });
    expect(consoleSpy).toHaveBeenCalledWith('Erro na API interna:', errorMessage);

    consoleSpy.mockRestore();
  });

  it('deve logar erro genérico se erro não for instancia de Error', async () => {
    (api.get as jest.Mock).mockRejectedValue('Erro desconhecido');

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Erro interno ao comunicar com o Strapi' });
    expect(consoleSpy).toHaveBeenCalledWith('Erro na API interna:', 'Erro desconhecido');

    consoleSpy.mockRestore();
  });
});
