'use client';
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import CartModuls from '@/components/CartModuls';
import cartImg from '../assets/images/cart_2.png'
import userImg from '../assets/images/user.png'
import notificationImg from '../assets/images/notification.png'
const NavIcon =()=>{
  const [isProfileOpen, serIsProfileOpen] = useState(false);
  const [isCartOpen, serIsCartOpen] = useState(false);
  const router =  useRouter();
const isLoggedIn = false;
const handleProfile =()=>{
  if(!isLoggedIn){
    router.push('/login');
  }
  serIsProfileOpen((prev)=>!prev);
}

  const removeCart =(action)=>{
  serIsCartOpen(action)
}
  return (<>
  <div className="flex z-20 gap-4 sm:gap-6 lg:gap-10">
   <div className="relative" onClick={()=>serIsCartOpen((prev)=>!prev)}>
    <Image src={cartImg} alt ="logo" width={28} height={28} className=""/>
    <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-sm text-white flex justify-center items-center">2</div>
   </div>
    {isCartOpen && <CartModuls onRemoveCart={removeCart}  />}
   <Image src={notificationImg} alt ="logo" width={28} height={28} className="" />
 <Image src={userImg} onClick={handleProfile} alt ="logo" width={28} height={28} className="cursor-pointer" />
  {isProfileOpen && (<div className="absolute flex flex-col  bg-yellow gap-4 xs:mt-[80px] mt-[90px] right-4 p-4 rounded-md shadow-[0_3px_10px_rgb(0.0.0.2)] z-20">
 {isLoggedIn && <Link href="/profile" className="cursor-pointer hover:border-b-2">Profile</Link>}
 {isLoggedIn ? <Link href ="/logout" className="cursor-pointer hover:border-b-2">logout</Link>: <Link href ="/login" className="cursor-pointer hover:border-b-2">login</Link>}
 </div>)}
  </div>
  </>)
}
export default NavIcon;