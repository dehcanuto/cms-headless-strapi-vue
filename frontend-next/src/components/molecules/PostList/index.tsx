import React, { JSX } from 'react';

import PostCard from '@components/molecules/PostCard';
import { PostListPropTypes } from './types';

const PostList = ({ posts, loading }: PostListPropTypes): JSX.Element => {
  if (loading) return <p className="text-center mt-20">Carregando posts...</p>;
  if (posts.length === 0) return <p className="text-center mt-20">Nenhum post encontrado.</p>;

  return (
    <div className="grid grid-cols-1 gap-y-16">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
