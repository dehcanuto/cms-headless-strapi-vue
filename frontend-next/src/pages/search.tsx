import { JSX } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchPosts from '@components/organisms/SearchPosts';

const SearchPostPage = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Buscador: {query}</h1>
      <SearchPosts search={query ?? ''}></SearchPosts>
    </div>
  );
};

export default SearchPostPage;
