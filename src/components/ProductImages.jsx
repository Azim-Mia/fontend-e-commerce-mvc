'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imagesData from '@/lips/imagesData';

const ProductImages = () => {
  const images = imagesData();
  const [index, setImageIndex] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* ---------- Main Image ---------- */}
      <div className="relative w-full h-[300px] sm:h-[450px] overflow-hidden rounded-2xl shadow-lg group">
        <Link href={`/product/${index + 1}`}>
          <Image
            src={images[index].url}
            alt="product"
            fill
            sizes="80vw"
            className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Image counter overlay */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* ---------- Thumbnails ---------- */}
      <div className="flex justify-center flex-wrap gap-3 mt-5 w-full">
        {images.map((data, i) => (
          <div
            key={data.id}
            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
              index === i
                ? 'border-indigo-600 shadow-md scale-105'
                : 'border-transparent hover:scale-105 hover:shadow-sm'
            }`}
            onClick={() => setImageIndex(i)}
          >
            <Image
              src={data.url}
              alt={`product-${i}`}
              fill
              sizes="20vw"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
