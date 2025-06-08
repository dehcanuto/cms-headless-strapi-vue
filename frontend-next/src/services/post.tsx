import { PostPropsType } from '@/models/post';

export async function getPosts(): Promise<PostPropsType[]> {
  const data = await fetch('http://localhost:1337/api/post', {
    cache: 'no-store',
  }).then((res) => res.json());

  return data;
}

export async function getSinglePost(url: string): Promise<PostPropsType> {
  const data = await fetch(`http://localhost:1337/api/post/${url}`, {
    cache: 'no-store',
  }).then((res) => res.json());

  return data;
}

