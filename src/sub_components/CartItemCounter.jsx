'use client';
import React, { useEffect, useState } from "react";
import findCartProducts from '@/lips/findCartProducts';

const CartItemCounter = ({length}) => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setCount(length)
    alert(count)
  },[count])
  return <p className="text-white">{count}</p>;
};

export default CartItemCounter;
