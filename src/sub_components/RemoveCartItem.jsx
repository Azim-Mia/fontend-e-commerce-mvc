'use client'
import axios from 'axios';
import { useCart } from "@/contexts/CartContext";
const RemoveCartItem =({productId,onRemoveCartItem})=>{
  const {removeCartItem} = useCart();
const handleRemoveCartItem =async()=>{
 const removed = await removeCartItem(productId);
 onRemoveCartItem(removed);
}
  return (<>
  <span onClick={handleRemoveCartItem} className="bg-gray-light p-1 rounded-sm">Remove</span>
  </>)
}
export default RemoveCartItem;