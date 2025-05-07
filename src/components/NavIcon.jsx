'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CartModuls from '@/components/CartModuls';
import findCartProducts from '@/lips/findCartProducts';
import { useCart } from "@/contexts/CartContext";
import CartLength from '../sub_components/CartLength';
import cartImg from '../assets/images/cart_2.png';
import userImg from '../assets/images/user.png';
import notificationImg from '../assets/images/notification.png';
import searchImg from '../assets/images/search.png';

const NavIcon = () => {
  const {viewCartContext} = useCart()
  const [carts,setCarts] = useState([]);
  const [cartLength,setCartLength] = useState(null);
  const [subtotal,setSubtotal] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = true;
  const toggleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setIsProfileOpen(prev => !prev);
    }
  };

  const hideCartModule = (action) => {
    setIsCartOpen(action);
  };
  const fatchData = async()=>{
    const {carts,length,subtotal} = await viewCartContext();
    setCarts(carts);
    setCartLength(length);
    setSubtotal(subtotal)
  }
useEffect(()=>{
  fatchData();
},[isCartOpen,subtotal,length]);
  return (
    <div className="flex items-center gap-4 xs:text-sm sm:gap-6 lg:gap-10">
      <Link href="/search">
        <Image src={searchImg} alt="search icon" className="xs:h-5 w-5" />
      </Link>

      <div className="relative cursor-pointer" onClick={() => setIsCartOpen(prev => !prev)}>
        <Image src={cartImg} alt="cart icon" width={42} height={42} className="xs:h-5 w-5" />
        <div className="absolute -top-4 -right-4 w-6 h-6 xs:h-4 xs:w-4 bg-lama rounded-full text-sm text-white flex justify-center items-center">
          <CartLength />
        </div>
      </div>

      {isCartOpen && (
        <CartModuls
          hideCartModule={hideCartModule} allCarts = {carts}
          subtotal={subtotal}
        />
      )}

      <Image src={notificationImg} alt="notification icon" width={28} height={28} className="xs:h-5 w-5" />

      <Image
        src={userImg}
        alt="user icon"
        width={28}
        height={28}
        onClick={toggleProfile}
        className="cursor-pointer xs:h-5 w-5"
      />

      {isProfileOpen && (
        <div className="absolute flex flex-col bg-yellow gap-4 xs:mt-[60px] mt-[80px] right-4 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          {isLoggedIn && <Link href="/profile" className="cursor-pointer hover:border-b-2">Profile</Link>}
          <Link href={isLoggedIn ? "/logout" : "/login"} className="cursor-pointer hover:border-b-2">
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavIcon;
