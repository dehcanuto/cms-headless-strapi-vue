import { NextApiRequest, NextApiResponse } from 'next';
import handler from './';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API /api/posts handler', () => {
  let req: Partial<NextApiRequest>;
  let res: Partial<NextApiResponse>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock }));

    res = {
      status: statusMock,
      json: jsonMock,
    };
  });

  it('deve criar um post com POST', async () => {
    req = {
      method: 'POST',
      body: { title: 'Post teste' },
    };

    mockedAxios.post.mockResolvedValueOnce({
      data: { id: 1, attributes: { title: 'Post teste' } },
    });

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(mockedAxios.post).toHaveBeenCalledWith('/api/post', {
      data: req.body,
    });
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith({ id: 1, attributes: { title: 'Post teste' } });
  });

  it('deve buscar posts com GET', async () => {
    req = {
      method: 'GET',
      query: { q: 'teste' },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: [{ id: 1, attributes: { title: 'Post teste' } }],
    });

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      '/api/post?filters[title][$containsi]=teste&populate=*'
    );
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith([{ id: 1, attributes: { title: 'Post teste' } }]);
  });

  it('deve retornar 405 para método não permitido', async () => {
    req = {
      method: 'PUT',
    };

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(405);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Method not allowed' });
  });

  it('deve retornar 500 em caso de erro', async () => {
    req = {
      method: 'POST',
      body: { title: 'Erro' },
    };

    mockedAxios.post.mockRejectedValueOnce(new Error('Falha na requisição'));

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Erro interno ao comunicar com o Strapi' });
  });
});
