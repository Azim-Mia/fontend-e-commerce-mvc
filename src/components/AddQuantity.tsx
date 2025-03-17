'use client';
import axios from 'axios';
import React, { useState } from 'react';
import addToCartProduct from '@/lips/addToCartProduct';
import CustomizeProducts from '@/components/CustomizeProducts';
const AddQuantity = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [color,setColor]=useState('');
  const [size,setSize]=useState('');
  const [message, setMessage] = useState('');

  const inventoryId = data?.findProduct.inventoryId;
  const productId = data?.findProduct.productId;
  const stock = data.stock;
  const url = 'http://localhost:3001/carts/add-to-cart';
  const body = {
    inventoryId:inventoryId as string,
    productId:productId as string,
    quantity:quantity as number,
    color:color as string,
    size:size as string
  };
const handleQuantityDecrincriment=()=>{
  if(quantity <= 1 ){
    setQuantity(1)
  }else{
    setQuantity( quantity-1)
  }
}
  const handleQuantityIncriment=()=>{
    setQuantity(quantity +1)
  }
const handleColor=(color)=>{
  setColor(color)
  alert(color)
}
const handleSize=(size)=>{
  setSize(size)
  alert(size)
}
  const handleAddToCart = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/requestHeaders');
      const existsId = response.headers['x-card-session-id'];
      if (existsId == 'null') {
        const { data } = await addToCartProduct(url, 'post', body);
        setMessage(data?.message)
        await axios.post('http://localhost:3000/api/requestHeaders', { sessionId: data.sessionId });
        setMessage(data.message)
      } else {
       const {data} = await addToCartProduct(url, 'post', body, existsId);
        setMessage(data.message);
      }
      setMessage(error instanceof Error ? error.message : 'An error occurred');
    } catch (error) {
    }
  };
  return (<>
  <CustomizeProducts onHandleColor={handleColor} onHandleSize={handleSize}/>
    <div className="flex flex-col gap-4 mt-4">
      <p>{message}</p>
      <h4>Choose a Quantity</h4>
      <div className="flex justify-between flex-wrap items-center gap-6 lg:gap-8">
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <div className="flex gap-4">
             <button className="text-2xl py-1 px-4 bg-gray-light rounded-lg hover:bg-lama hover:text-white" onClick={handleQuantityDecrincriment}>
              -
            </button>
            <button className="text-2xl py-1 px-4 bg-gray-light rounded-lg hover:bg-lama hover:text-white" onClick={handleQuantityIncriment}>
              +
            </button>
          </div>
          <p className="text-sm bg-[#eeffcc] py-2 px-4 rounded-md">Quantity : {quantity}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-32 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  </>);
};

export default AddQuantity;
