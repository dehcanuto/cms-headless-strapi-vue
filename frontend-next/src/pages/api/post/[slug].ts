import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_STRAPI_API_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  try {
    if (req.method === 'GET') {
      const response = await api.get(`/api/post/${slug}`);
      return res.status(200).json(response.data);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('Erro na API interna:', error.message);
    return res.status(500).json({ error: 'Erro interno ao comunicar com o Strapi' });
  }
}
