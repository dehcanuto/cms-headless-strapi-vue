'use client';

import React, { useEffect, useState, JSX } from 'react';

import { getPosts } from '@/services/post';
import { PostPropsType } from '@/models/post';
import PostList from '@components/molecules/PostList';

const ListAllPosts = (): JSX.Element => {
  const [posts, setPosts] = useState<PostPropsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((res: PostPropsType[]) => setPosts(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-2xl mx-auto border-t border-gray-200 py-10 my-10 sm:my-16 sm:py-16">
      <PostList posts={posts} loading={loading}></PostList>
    </div>
  );
};

export default ListAllPosts;
