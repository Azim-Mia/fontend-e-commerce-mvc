'use client'
import React, {useState,useEffect} from 'react';
import getItem from '@/lips/getItem';
import InventoryList from '@/components/deshboard/inventories/InventoryList'
const InventoryPage =()=>{
  const [data,setData] =useState([])
  const fatchData =async()=>{
    const data = await getItem('http://localhost:3001/inventoris/finds');
    setData(data)
  }
  useEffect(()=>{
    fatchData()
  },[data])
return (<>
  <InventoryList data ={data} />
</>)
  }
  export default InventoryPage;