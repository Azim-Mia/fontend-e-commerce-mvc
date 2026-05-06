'use client';
import Link from 'next/link';
import {useState} from 'react';
import "./bars.css";
const isAdmin =true;
const Bars =() =>{
const [burger_class, setBurgerClass] =useState("burger-bar unClicked");
const [menu_class,setMenuClass] =useState("menu hidden");
const [isMenuClicked,setIsClicked] =useState(false);
  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }else{
     setBurgerClass("burger-bar unClicked");
      setMenuClass("menu hidden");
    }
    setIsClicked(!isMenuClicked)
  }
  return ( <>
  <div className="burger_menu" onClick={updateMenu}> 
  <div className={burger_class}></div>
    <div className={burger_class}></div>
    <div className={burger_class}></div>
  </div>
  <div className ={menu_class}>
    <ul className="p-2 text-center text-[#000]">
     {isAdmin && <Link href="/deshboard"><li className="p-1 hover:text-white border-b mt-1">Deshboard</li></Link>}
   <Link href="/"><li className="p-1 hover:text-white border-b mt-1">Home</li></Link>
  <Link href="/list"><li className="p-1 hover:text-white border-b mt-1">Category</li></Link>
  <Link href="/shop"><li className="p-1 hover:text-white border-b mt-1">Shop</li></Link>
  </ul>
  </div>
  </>)
}
export default Bars;