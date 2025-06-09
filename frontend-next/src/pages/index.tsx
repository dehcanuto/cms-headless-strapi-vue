import React from 'react';
import Head from 'next/head';

import ListAllPosts from '@components/organisms/ListAllPosts';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Nosso Blog | O seu blog colaborativo</title>
        <meta name="description" content="O seu blog colaborativo" />
        <meta property="og:title" content="Criar post" />
        <meta property="og:description" content="O seu blog colaborativo" />
      </Head>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Nosso Blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Veja algumas matérias do blog mais nosso que existe!
          </p>
        </div>
        <ListAllPosts></ListAllPosts>
      </div>
    </>
  );
}
