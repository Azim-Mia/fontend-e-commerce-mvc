'use client';
import SearchBar from '@/components/SearchBar';
//import ProductsList  from '@/components/ProductList'
export default function SearchPage() {
  const searchText = (search) => {
    alert(search);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className ="flex justify-center items-center">
        <SearchBar onSearchText={searchText} />
        </div>
    </div>
  );
}
