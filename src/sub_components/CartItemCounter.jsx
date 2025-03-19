'use client'
import { useEffect, useState } from 'react';
import findCartProducts from '@/lips/findCartProducts';

const CartItemCounter = () => {
  const [allCart, setAllCart] = useState([]);
  const [count, setCount] = useState(0);
 const getItems = async () => {
      const { carts, error } = await findCartProducts();
      if (error) {
        console.error("Error fetching cart products:", error);
        return;
      }
      setAllCart(carts || []); // Ensure it's an array
      setCount(carts?.length || 0);
    };
  useEffect(() => {
    getItems();
  }, [getItems]); // Empty dependency array means it runs once
  return (
    <>  
    <span>{count}</span>
    </>
  );
};

export default CartItemCounter;
