import type { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import handler from '.';
import api from '@/services/api';

jest.mock('@/services/api', () => ({
  post: jest.fn(),
  get: jest.fn()
}));

describe('API /api/post handler', () => {
  let req: Partial<NextApiRequest>;
  let res: Partial<NextApiResponse>;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock }));

    res = {
      status: statusMock,
      json: jsonMock,
    };
  });

  it('deve criar um post com POST', async () => {
    const postData = {
      title: 'Primeiro post',
      description: 'Resumo do primeiro post',
      content: 'Resumo do primeiro post',
      slug: 'primeiro-post'
    };

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: postData
    });

    (api.post as jest.Mock).mockResolvedValue({
      data: {
        id: 1,
        ...postData
      }
    });

    await handler(req, res);

    expect(api.post).toHaveBeenCalledWith('/api/post', { data: postData });
    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual({ id: 1, ...postData });
  });

  it('deve buscar posts com GET', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {
        q: 'teste'
      }
    });

    (api.get as jest.Mock).mockResolvedValue({
      data: {
        posts: ['mocked post']
      }
    });

    await handler(req, res);

    expect(api.get).toHaveBeenCalledWith(
      '/api/post?filters[title][$containsi]=teste&populate=*'
    );
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ posts: ['mocked post'] });
  });

  it('deve retornar 405 para método não permitido', async () => {
    req = { method: 'PUT' };

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(405);
    expect(jsonMock).toHaveBeenCalledWith({
      error: 'Method not allowed',
    });
  });

  it('deve retornar 500 em caso de erro na chamada POST', async () => {
    req = {
      method: 'POST',
      body: { title: 'erro' },
    };

    (api.post as jest.Mock).mockRejectedValueOnce(new Error('Erro simulado'));

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({
      error: 'Erro interno ao comunicar com o Strapi',
    });
  });
});
