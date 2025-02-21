'use client';
import React,{useState, useRef} from 'react';
import Image from 'next/image';
import searchImg from '../assets/images/search.png'
import {useRouter} from 'next/navigation';
const SearchBar = ()=>{
  const searchValue = useRef();
  const router = useRouter();
  const handleSearch =(e)=>{
    e.preventDefault();
  const search = searchValue.current.value;
  if(search){
    router.push(`/list?search=${search}`);
  }
  }
  return (<>
  <form onSubmit={handleSearch} className="flex gap-3 text-2xl h-10 mt-3 mb-2">
  <input type="text" ref={searchValue} name="search" placeholder="search products" className=" border text-center rounded-md cursor-pointer w-3/4 sm:w-5/6" />
    <button type="submit">
    <Image src ={searchImg} alt="logo" width={32} height={32} className="h-10 rounded-md" /></button>
    </form>
  </>)
}
export default SearchBar;