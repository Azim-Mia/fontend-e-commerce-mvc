'use client';
import React,{useState, useRef} from 'react';
import {useRouter} from 'next/navigation';
const SearchBar = ()=>{
  const searchValue = useRef();
  const router = useRouter();
  const handleSearch =(e)=>{
    e.preventDefault();
  const search = searchValue.current.value;
  if(search){
  alert("api call now")
  }
  }
  return (<>
  <div className="flex gap-3 text-2xl h-10 mt-3 mb-2">
  <input type="text" onChange={handleSearch} ref={searchValue} name="search" placeholder="search products" className=" border text-center rounded-md cursor-pointer w-3/4 sm:w-5/6" />
    </div>
  </>)
}
export default SearchBar;