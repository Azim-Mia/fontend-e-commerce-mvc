import React from 'react';
import Image from 'next/image';
import Fillter from '@/components/Fillter';
import ProductList from '@/components/ProductList';
import product_11 from '../../assets/images/product_11.webp'
export default async function ListPage(){
  return (<>
  <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
  {/*CAMPAGN*/}
  <div className="mt-8  bg-gray-light p-4 flex justify-between h-64">
  <div className="w-2/3 flex flex-col justify-center items-center gap-8">
    <h1 className="text-4xl xs:text-2xl font-semibold leading-[48px] text-gray-700">This product is very nice that <br/> good Product</h1>
    <button className="px-4 px-2 bg-lama rounded-md text-white">Boy Now</button>
  </div>
  <div className="relative w-1/3">
  <Image src={product_11} fill alt="image" className="object-contain"/>
  </div>
  </div>
  {/*Fillter*/}
  <Fillter />
    {/*ProductList*/}
    <p className="mt-12 text-xl font-semibold">Shows for product list</p>
  <ProductList />
  </div>
  </>)
}