'use client';
import React,{useState,useEffect} from 'react'
import {redirect} from 'next/navigation';
import findAll from '@/lips/findAll'
import OrderDetailsViews from '@/sub_components/OrderDetailsViews'
const OrderCheck =()=>{
  const [info,setInfo]=useState([])
  useEffect(()=>{
    const url='http://localhost:3001/orders/find';
    const facthOrder =async()=>{
    const {data} = await findAll(url);
    if (!data?.success) {
          redirect('/login');
        }
    setInfo(data)
  }
  facthOrder()
  },[])
  return (<div className="flex flex-wrap justify-center items-center">
    {info && info.data?.map((order)=><ul key={order._id}>
      <OrderDetailsViews order ={order} />
    </ul>)}
  </div>)
}
export default OrderCheck;


