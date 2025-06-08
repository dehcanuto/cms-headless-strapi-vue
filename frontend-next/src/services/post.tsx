import { PostPropsType } from '@/models/post';

export async function getPosts(): Promise<PostPropsType[]> {
  const data = await fetch('http://localhost:1337/api/post', {
    cache: 'no-store',
  }).then((res) => res.json());

  return data.map((item: PostPropsType) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    publishedAt: item.publishedAt,
  }));
}
