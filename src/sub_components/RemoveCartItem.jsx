'use client'
import axios from 'axios';
//import { useCart } from "@/contexts/CartContext";
const RemoveCartItem =({productId,onSetCartProduct})=>{
const handleRemoveCartItem =async()=>{
  const requestId = await axios.get('http://localhost:3000/api/requestHeaders');
    const existsId = requestId.headers['x-card-session-id'] || 'null';
  if(existsId !== 'null'){
    const response = await axios.get(`http://localhost:3001/carts/me/item/${productId}`,{
    withCredentials: true,
    headers: { 'x-card-session-id': existsId }
  });
  const removed= response.data.cart.filter((item)=> item.productId !== productId)
  onSetCartProduct(removed)
  }
}
  return (<>
  <span onClick={handleRemoveCartItem} className="bg-gray-light p-1 rounded-sm">Remove</span>
  </>)
}
export default RemoveCartItem;