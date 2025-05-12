'use client'
import { createContext, useContext, useState,useEffect} from 'react';
const CartContext = createContext();
import findCartProducts from '@/lips/findCartProducts';
import addToCartProduct from '@/lips/addToCartProduct';
import axios from 'axios';
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const url = 'http://localhost:3001/carts/add-to-cart';
  const [cartCount, setCartCount] = useState(0);
  const [message,setMessage] =useState(null);
  const [carts,setCarts] = useState([]);
  const [subtotal,setSubtotal] = useState(null);
  
  const viewCartContext =async()=>{
    const {carts,subtotal} = await findCartProducts()
    setCarts(carts);
    setSubtotal(subtotal)
    const length = carts.length;
    setCartCount(length);
    return;
   }
   useEffect(()=>{
     viewCartContext();
   },[cartCount,subtotal])
   
   const addedToCart = async (body) => {
    try {
      const response = await axios.get('http://localhost:3000/api/requestHeaders');
      const existsId = response.headers['x-card-session-id'];
      if (existsId == 'null') {
        const { data } = await addToCartProduct(url, 'post', body);
        setMessage(data?.message)
        await axios.post('http://localhost:3000/api/requestHeaders', { sessionId: data.sessionId });
       await viewCartContext()
        setMessage(data.message)
      } else {
       const {data} = await addToCartProduct(url, 'post', body, existsId);
       //cart viewCartContext
    await viewCartContext();
        setMessage(data.message);
      }
    } catch (error){
     setMessage(error instanceof Error ? error.message : 'An error occurred'); 
    }
  };
  let removed =[];
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
  setCartCount((prev)=>prev - 1)
  }
  return;
  }
  return (
    <CartContext.Provider value={{
    cartCount
    ,carts
    ,subtotal
    ,setCarts
    ,removeCartItem
   ,message
   ,addedToCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
