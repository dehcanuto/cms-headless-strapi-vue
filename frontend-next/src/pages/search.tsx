import React, { JSX } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';

import SearchPosts from '@components/organisms/SearchPosts';

const SearchPostPage = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <>
      <Head>
        <title>Buscando o post: {query}</title>
        <meta name="description" content="Busque posts através do seu título" />
        <meta property="og:title" content={`Buscando o post: ${query}`} />
        <meta property="og:description" content="Busque posts através do seu título" />
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-6">Buscador: {query}</h1>
        <SearchPosts search={query ?? ''}></SearchPosts>
      </div>
    </>
  );
};

export default SearchPostPage;
