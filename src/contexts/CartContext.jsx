'use client'
import { createContext, useContext, useState} from 'react';
import axios from 'axios';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  
  const addToCartLengthCheck =()=>{
    setCartCount((prev)=>prev + 1)
  }
  return (
    <CartContext.Provider value={{ cartCount, addToCartLengthCheck,setCartCount}}>
      {children}
    </CartContext.Provider>
  );
};
