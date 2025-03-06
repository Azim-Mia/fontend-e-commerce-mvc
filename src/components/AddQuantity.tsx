'use client';
import React,{useState} from 'react';
import findSingleInventory from '@/lips/findSingleInventory';
const AddQuantity = ({data})=>{
  const [quantity, setQuantity] = useState(1);
  const inventoryId = data?.findProduct.inventoryId;
  const productId = data?.findProduct.productId;
  //incriment and dcriment quantity
  //TEMPORARI STOCK
  const stock = data.stock;
  const handleQuantity = (type: "i" | "d")=>{
if(type ==="d" && quantity > 1){
  setQuantity((prev)=>prev - 1);
}   
if(type ==="i" && quantity < stock){
  setQuantity((prev)=>prev + 1);
}   
  };
  const handleAddToCart =()=>{
    alert(productId)
  }
  return (<div className ="flex flex-col gap-4 mt-4">
  <h4>Choose a Quantity</h4>
  <div className="flex justify-between flex-wrap items-center gap-6 lg:gap-8">
  <div className=" flex gap-4 sm:gap-6 md:gap-8">
  <div className="flex gap-4">
  <button className="text-2xl py-1 px-4 bg-gray-light rounded-lg hover:bg-lama hover:text-white" onClick={()=>handleQuantity('i')}>+</button>
   <button className=" text-2xl py-1 px-4 bg-gray-light rounded-lg hover:bg-lama hover:text-white" onClick={()=>handleQuantity('d')}> - </button>
    </div>
  <p className="text-sm bg-[#eeffcc] py-2 px-4 rounded-md">Quantity : {quantity}</p>
  </div>
  <button onClick={handleAddToCart} className="w-32 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">Add to cart</button>
  </div>
  </div>)
}
export default AddQuantity;