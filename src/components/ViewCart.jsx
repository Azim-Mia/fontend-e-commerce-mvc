'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios';
import userImg from '../assets/images/product_1.jpeg'
const ViewCart = ()=>{
  const [carts,setCart] = useState(null);
const getCart =async()=>{
  const requestId = await axios.get('http://localhost:3000/api/requestHeaders');
    const existsId = requestId.headers['x-card-session-id'] || 'null';
if(existsId !== 'null' ){
    // Fetch cart items
    const {data} = await axios.get('http://localhost:3001/carts/views', {
      withCredentials: true,
      headers: { 'x-card-session-id': existsId },
    });
    setCart(data.result);
}
}
useEffect(()=>{
  getCart()
},[])
  return (<>
       { !carts && <p>Cart not found</p>}
      { !carts && <p>Cart not found</p>}
  {carts && (<ul className="m-1 h-auto rounded-md gap-4 sm:w-2/3 text-white p-1 xs:w-full sm:text-md">{carts?.map((item)=><li key={item.productId} className="flex bg-[#000] mt-2 gap-4 gap-3 xs:w-full rounded-md">
   <div className="flex gap-2 p-4">
    <Image src={userImg} alt="image" width={60} height={40} className="sm:h-48 sm:w-48 rounded-sm"/>
  <div className="flex justify-center items-center xs:flex-col gap-4">
 <div className="flex gap-2">
 <h1>Name : {item.productName}</h1>
 <p>Price : {item.price}</p>
 </div>
 <div className="flex gap-2">
 <p>Quantity : {item.quantity}</p>
 <p>Colour : {item.color}</p>
 </div>
 <div className="flex gap-2">
 <p>Size : {item.size}</p>
 </div>
 </div>
 </div>
  </li>)}</ul>)}
  </>)
}
export default ViewCart