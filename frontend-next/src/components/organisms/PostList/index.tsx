'use client';

import { useEffect, useState, JSX } from 'react';

import { getPosts } from '@/services/post';
import { PostPropsType } from '@/models/post';

import PostCard from '@components/molecules/PostCard';

const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<PostPropsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((res: PostPropsType[]) => setPosts(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20">Carregando posts...</p>;
  if (posts.length === 0) return <p className="text-center mt-20">Nenhum post encontrado.</p>;

  return (
    <div className="max-w-2xl mx-auto border-t border-gray-200 pt-10 mt-10 sm:mt-16 sm:pt-16">
      <div className="grid grid-cols-1 gap-y-16">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
