'use client';
import React,{useState, useRef} from 'react';
const SearchBar = ({onSearchText})=>{
  const searchValue = useRef();
  const handleSearch =(e)=>{
    e.preventDefault();
  const search = searchValue.current.value;
  onSearchText(search)
  }
  return (<>
  <div className="flex justify-center items-center gap-3 text-2xl h-10 mt-12 mb-2">
  <input type="text" onChange={handleSearch} ref={searchValue} name="search" placeholder="search products" className=" border text-center rounded-md cursor-pointer w-3/4 sm:w-5/6" />
    </div>
  </>)
}
export default SearchBar;