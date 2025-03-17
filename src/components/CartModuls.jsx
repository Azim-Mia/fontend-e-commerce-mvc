'use client';
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import product_1 from '../assets/images/product_1.jpeg'
import product_2 from '../assets/images/product_2.jpeg'
import findCart from '@/lips/findCart';
import findSingle from '@/lips/findSingle'
import findCartProducts from '@/lips/findCartProducts';
import RemoveCartItem from '@/sub_components/RemoveCartItem'
import ViewCart from '@/components/ViewCart'
//get cart then map
const CartModuls = ({onRemoveCart})=>{
  const [isCart,setIsCart]=useState(true)
const [isViewCart,setIsViewCart]=useState(false)
  const [cartProduct,setCartProduct] =useState(null);
  const [allCart, setAllCart] = useState(null)
  const [errors ,setErrors] =useState(null);
  //remove CartModuls
  const handleRemoveCart=()=>{
    setIsCart(false)
  }
  const handleViewCart=()=>{
    setIsViewCart(true)
  }
  const fetchAllCart = async()=>{
 try{
   const { carts, error  } = await findCartProducts();
 setAllCart(carts)
 }catch(error){
  setErrors(error) 
 }
  }
  useEffect(()=>{
      if(isCart){
        fetchAllCart();
      }
    onRemoveCart(isCart);
  },[isCart])
  return (<>
  <div className="w-max absolute p-4 rounded-md shadow-[_0_3px_10px_rgb(0.0.0.2)] bg-white top-24  right-5 flex flex-col flex-center items-center">
  {isCart && (<div className="z-40 relative flex gap-4 sm:flex-col gap-1 xs:flex-col gap-1">
 <div className="flex justify-between">
   <h2>Shipping Cart</h2>
   <button onClick={handleRemoveCart} className="bg-yellow py-1 px-2 rounded-md hover:text-gray-light">Close</button>
  </div>
  {/*Product --1*/}
  <>
 <div> {isViewCart && <ViewCart />}</div>
  <p>{errors}</p>
  {allCart && allCart.map((cart)=><div key={cart.productId} className="flex justify-between gap-2">
    <Image src={product_1} alt="products" width={72} height={96} className="object-cover rounded-md"/>
    {/*top*/}
    <div className="flex flex-col justify-between w-full">
     {/*title*/}
   <div className="flex items-center justify-between gap-8">
   <h3 className="font-senibold">{cart.name}</h3>
   <div className="p-2 bg-pink rounded-sm">{cart.price}</div>
   </div>
     {/*dsc*/}
     <div className="text-sm text-gray">ableable</div>
      {/*buttom*/}
    <div className="flex justify-between items-center">
    <span className="bg-gray-light p-1 rounded-sm">Qnt : {cart.quantity}</span>
      <RemoveCartItem productId = {cart.productId} onSetCartProduct={setAllCart} />
     </div>
     </div>
  </div>)}
  <div className="flex justify-between gap-2">
    <Image src={product_1} alt="products" width={72} height={96} className="object-cover rounded-md"/>
    {/*top*/}
    <div className="flex flex-col justify-between w-full">
     {/*title*/}
   <div className="flex items-center justify-between gap-8">
   <h3 className="font-senibold">Product title</h3>
   <div className="p-2 bg-pink rounded-sm">599</div>
   </div>
     {/*dsc*/}
     <div className="text-sm text-gray">ableable</div>
      {/*buttom*/}
    <div className="flex justify-between items-center">
    <span className="bg-gray-light p-1 rounded-sm">Qnt. 2</span>
<RemoveCartItem />
     </div>
     </div>
  </div>
</>
     <div className="flex justify-between text-sm items-center">
     <span className="text-lama">Subtotal</span>
     <span className="text-blue">$1999</span>
     </div>
      <p className="text-sm text-gray mt-2 md-4">
     Shipping taxes calculate
     </p>
     <div className="flex gap-4 justify-between text-sm">
     <button onClick={handleViewCart} className="rounded-md py-1 px-2 ring-1 ring-gray">view_carts</button>
    <button className="rounded-md py-1 px-2 ring-1 ring-gray bg-black text-white">Checkout</button>
     </div>
  </div>
  )}
  
  </div>
  </>)
}
export default CartModuls;