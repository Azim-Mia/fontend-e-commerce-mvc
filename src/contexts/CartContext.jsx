'use client'
import { createContext, useContext, useState} from 'react';
const CartContext = createContext();
import findCartProducts from '@/lips/findCartProducts';
import axios from 'axios';
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  let removed = [];
  const addToCartLengthCheck =async()=>{
    const {carts} = await findCartProducts()
    const length = carts.length;
    setCartCount(length)
    return {carts,length};
  }
  const removeCartItem =async(productId)=>{
  const requestId = await axios.get('http://localhost:3000/api/requestHeaders');
    const existsId = requestId.headers['x-card-session-id'] || 'null';
  if(existsId !== 'null'){
    const response = await axios.get(`http://localhost:3001/carts/me/item/${productId}`,{
    withCredentials: true,
    headers: { 'x-card-session-id': existsId }
  });
  const removedData= response.data.cart.filter((item)=> item.productId !== productId)
  removed = removedData;
  }
  return removed;
  }
  return (
    <CartContext.Provider value={{ cartCount, addToCartLengthCheck,setCartCount,removeCartItem}}>
      {children}
    </CartContext.Provider>
  );
};
