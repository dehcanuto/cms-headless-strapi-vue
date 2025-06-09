'use client';

import { useEffect, useState, JSX } from 'react';

import { getSearchedPost } from '@/services/post';
import { PostPropsType } from '@/models/post';
import PostList from '@components/molecules/PostList'
import { useRouter } from 'next/router';

const SearchPosts = ({ search } : { search: string }): JSX.Element => {
  const router = useRouter();
  const [posts, setPosts] = useState<PostPropsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!search)router.push('/');

    getSearchedPost(search)
      .then((res: PostPropsType[]) => setPosts(res))
      .finally(() => setLoading(false));
  }, [router, search]);

  return (
    <div className="max-w-2xl mx-auto border-t border-gray-200 py-10 my-10 sm:my-16 sm:py-16">
      <PostList posts={posts} loading={loading}></PostList>
    </div>
  );
};

export default SearchPosts;
