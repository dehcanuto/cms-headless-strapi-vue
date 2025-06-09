import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { getSinglePost } from '@/services/post';
import { PostPropsType } from '@/models/post';

export default function PostPage({ post }: { post: PostPropsType }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
      </Head>
      <article className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <time dateTime={post.publishedAt} className="text-gray-500">
              {post.publishedAt}
            </time>
          </div>
          <div
            className="border-t border-gray-200 pt-10 mt-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const res = await getSinglePost(slug);

  const publishedAt = new Date(res.publishedAt).toLocaleString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const post = {
    ...res,
    publishedAt,
  };

  return {
    props: {
      post,
    },
  };
};
