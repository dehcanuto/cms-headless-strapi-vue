'use client';

import { useEffect, useState, JSX } from 'react';
import { useRouter } from 'next/router';

import { getSinglePost } from '@/services/post';
import { PostPropsType } from '@/models/post';
import { DateFormatShort } from '@/misc/format';

const PostList = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<PostPropsType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    getSinglePost(slug as string)
      .then((res) => setPost(res))
      .catch(() => setPost(undefined))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="text-center mt-20">Carregando post...</p>;
  if (!post) return <p className="text-center mt-20">Post não encontrado.</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.publishedAt} className="text-gray-500">
            {DateFormatShort(post.publishedAt, true)}
          </time>
        </div>
        <div className="border-t border-gray-200 pt-10 mt-6">
            {post.content}
        </div>
      </div>
    </div>
  );
};

export default PostList;
