'use client';
import {useState, useEffect} from 'react';
import axios from 'axios';
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
  return (<div className="flex flex-row">
  {carts ? (<ul className="flex flex-row">{carts.map((item)=><li key={item.productId} className="flex">
  <h1>Price : {item.price}</h1>
  <h1>Price : {item.price}</h1>
 <h1>Price : {item.price}</h1>
 <h1>Price : {item.price}</h1>
  </li>)}</ul>):"Empty Item.."}
  </div>)
}
export default ViewCart