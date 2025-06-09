import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const api = axios.create({ baseURL: process.env.NEXT_STRAPI_API_URL });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const response = await api.post('/api/post', {
        data: req.body,
      });
      return res.status(201).json(response.data);
    }

    if (req.method === 'GET') {
      const { q } = req.query;

      const query = q
        ? `/api/post?filters[title][$containsi]=${encodeURIComponent(String(q))}&populate=*`
        : '/api/post?populate=*';

      const response = await api.get(query);
      return res.status(200).json(response.data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Erro na API interna:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Erro interno ao comunicar com o Strapi' });
  }
}
