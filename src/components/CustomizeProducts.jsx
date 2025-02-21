'use client';
import React,{useState} from 'react';
const CustomizeProducts = ()=>{
const [size, setSize] = useState('');
const handleSizeChange=(e)=>{
  const v = e.target.value
  setSize(v)
}
const handleSizeClick=(e)=>{
  const v = e.target.innerText;
  setSize(v)
}
  return (<div className ="flex flex-col gap-6">
  <h4 className="font-medium">Choose a color</h4>
  <ul className="flex items-center gap-6">
    <li name="" value={size} className="h-8 w-8 rounded-full ring-1 ring-gray-light bg-[#0000FF] cursor-pointer relative">
    <div className="absolute h-10 w-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </li>
    <li value={size} className="h-8 w-8 rounded-full ring-1 ring-gray-light bg-[#00FF00] cursor-pointer relative">
    <div className="absolute h-10 w-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </li>
    <li value={size} className="h-8 w-8 rounded-full ring-1 ring-gray-light cursor-pointer relative">
    <div className="absolute h-10 w-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </li>
  </ul>
   <h3 className="font-medium">Choose a size</h3>
    <ul className="flex items-center gap-3">
    <li value={size} className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer hover:bg-lama hover:text-white" onClick={handleSizeClick}>Small</li>
     <li value={size} className="ring-1 ring-lama text-coral rounded-md py-1 px-4 text-sm cursor-pointer hover:bg-lama hover:text-white" onClick={handleSizeClick}>Medium</li>
       <li value={size} className="ring-1 ring-lama bg-[#EEFBDB] rounded-md py-1 px-4 text-sm not-pointer hover:bg-lama hover:text-white" onClick={handleSizeClick}>Large</li>
       <li>
       <select className="h-8 w-1/2 px-1 mr-12" onChange={handleSizeChange}>
{size ==='' ? <option>null</option>:<option>{size}</option>}
           <option>Small</option>
           <option>Medium</option>
           <option>Large</option>
            <option>XL</option>
            <option>2xl</option>
       </select>
       </li>
    </ul>
  </div>)
}
export default CustomizeProducts;