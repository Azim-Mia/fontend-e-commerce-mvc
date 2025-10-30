'use client';
import React,{useState,useEffect} from 'react'
import {redirect} from 'next/navigation';
import findAll from '@/lips/findAll'
import OrderDetailsViews from '@/sub_components/OrderDetailsViews'
const OrderCheck =()=>{
  const [info,setInfo]=useState([])
   const api = process.env.SERVER_API;
  useEffect(()=>{
    const url=`${api}/orders/find`;
    const facthOrder =async()=>{
    const {data, error} = await findAll(url,'orderCheck',{ withCredentials:true, credentials: "include", method:'GET'});
   
    if(data){
      setInfo(data)
    }else{
      redirect('/login');
    }
  }
  facthOrder()
  },[])
  return (<div className="flex gap-4 flex-wrap justify-center items-center">
    {info && info.data?.map((order)=><ul key={order._id}>
      <OrderDetailsViews order ={order} />
    </ul>)}
  </div>)
}
export default OrderCheck;


