'use client'
import axios from 'axios';
import { useCart } from "@/contexts/CartContext";
const RemoveCartItem =({productId,onSetCartsItem})=>{
  const {removeCartItem} = useCart();
const handleRemoveCartItem =async()=>{
 const removed = await removeCartItem(productId);
 onSetCartsItem(removed);
}
  return (<>
  <span onClick={handleRemoveCartItem} className="bg-gray-light p-1 rounded-sm">Remove</span>
  </>)
}
export default RemoveCartItem;