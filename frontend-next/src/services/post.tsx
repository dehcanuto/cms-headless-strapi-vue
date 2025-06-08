import axios from 'axios'

import { CreatePostType, PostPropsType } from '@/models/post';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function getPosts(): Promise<PostPropsType[]> {
  const { data } = await api.get('/api/post')
  return data;
}

export async function getSinglePost(url: string): Promise<PostPropsType> {
  const { data } = await api.get(`/api/post/${url}`)
  return data;
}

export async function createPost(payload: CreatePostType): Promise<PostPropsType> {
  const { data } = await api.post('/api/post', payload)
  return data;
}
