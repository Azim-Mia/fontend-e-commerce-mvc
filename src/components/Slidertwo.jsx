"use client";
import { useState, useEffect } from "react";
import Image from 'next/image'
import product1 from '../assets/images/search.png'
import product2 from '../assets/images/product_1.jpeg'
const img = [
  product1,
  product2,
  product1,
];

const Slidertwo = () => {
 const [images,setImage] =useState(img)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (<>
    <div className="relative w-auto max-w-lg mx-auto">
     <Image src={images[currentIndex]} alt='photo' width={200} height={100} className="w-48 h-48 transition-opacity duration-1000"/>
    </div>
  </>);
};

export default Slidertwo;
