'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imagesData from '@/lips/imagesData';
import product_1 from '../assets/images/product_7.jpeg';
const ProductImages = ()=>{
  const images = imagesData();
  const [index, setImageIndex] = useState(0)
  return (<div className="">
  <div className="flex w-full flex-col sm:h-[600px] xs:h-[300px]  relative">
  <Link href={`/mwc-fashion/${index + 1 }`}><Image src={images[index].url} alt="product" fill sizes="50vw" className="object-cover rounded-md mt-1" /></Link>
  </div>
   <div className="w-1/2 h-32 relative flex justify-between gap-4 mt-8">
{images.map((data, i)=>(<div key={data.id} className="w-1/4  h-32  xs:h-16 relative">
  <Image src={data.url} alt="product" fill sizes="30vw" className="object-cover rounded-md cursor-pointer" onClick={()=>setImageIndex(i)} />
</div>))}
  </div>
  </div>)
}
export default ProductImages