'use client';

import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get('products') || '').toLowerCase();
  const page = (searchParams.get('page')) || 1;
  const searchText = (text) => {
    alert(text);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <SearchBar onSearchText={searchText} />
      <div>{query} page {page}</div>
    </div>
  );
}
