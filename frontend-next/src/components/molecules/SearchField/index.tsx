import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchField = (): JSX.Element => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <input
      type="text"
      placeholder="Buscar posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          router.push(`/search?q=${search}`);
        }
      }}
      className="rounded-md border border-gray-300 px-3 py-1 text-sm shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
    />
  );
};

export default SearchField;
