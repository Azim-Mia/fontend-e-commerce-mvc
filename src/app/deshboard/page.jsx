'use client';
import React,{useState} from 'react';
import { ChevronDown } from 'lucide-react'; // lucide-react থেকে chevron আইকন আনুন
import Image from 'next/image'
import ff from '../../assets/images/deshboard.jpeg'
import MonthlySalseAnalysis from '@/components/deshboard/MonthlySalseAnalysis';
import Chat from '@/components/chats/Chat'
import Cart from '@/components/deshboard/Cart';
import Link from 'next/link';
import Inventoris from '@/components/deshboard/linkPage/Inventories';
import Products from '@/components/deshboard/linkPage/Products'
import Categories from '@/components/deshboard/linkPage/Categories'
import Orders from '@/components/deshboard/linkPage/Orders'
import Others from '@/components/deshboard/linkPage/Others'
const Dashboard = () => {
  const [isAnalysis, setIsAnalysis] = useState(false)
  return (<div className="flex gap-4 justify-start p-0.5 mt-2 h-auto">
    <nav className="w-48">
<div className="flex justify-center items-center gap-2 rounded-sm text-2xl bg-cyan-400">
  <span><Image src={ff} alt="My Insta" width="25" height="25" className="rounded-md"/></span>
   <b className=" text-blue opacity-40">Deshboard</b>
</div>
      <Inventoris />
      <Products />
      <Categories />
      <Orders />
      <Others />
    </nav>
    
    <main className="hidden md:block w-full flex justify-center items-center flex-col gap-4 p-4 bg-pink">
      <div className="flex justify-center flex-wrap gap-4">
        <Cart title="Pendings Orders" value="30" />
                <Cart title="Sale Today" value="30" />
        <Cart title="Total Users" value="30" />
         <Cart title="Total Revenue" value="$4566.00" />
         <Cart title="Total Revenue rate" value="57.88%" />
       <Cart title="Recent Users" value="59" />     
              <Cart title="Recent Orders" value="59" /> 
                     <Cart title="Recent Views" value="59" /> 
      </div>
     <div className="flex gap-4"> 
     <Chat className="text-2xl" / >
       <div>
         <h1>Top Custommers</h1>
         <p>Top Custommers purchese Valume</p>
         <div className="flex justify-around">
           <div className="flex flex-1 gap-4 justify-around bg-white rounded-md justify-center items-center pl-2">
          <Image src={ff} alt="photos" width={20} />
         <article className="flex gap-1">
         <div>
           <p>Asif</p>
           <p>Parchese</p>
         </div>
         </article>
             <article>
               <p>+ $5755</p>
               <p>last Parchese 3 day ago</p>
             </article>
           </div>
         </div>
       </div>
     </div> 
     <div className="bg-white shadow-md rounded-md text-center">
       <div className="flex justify-between p-4">
         <p>Orders</p>
         <p>View all</p>
       </div>
<div className="grid grid-cols-9 gap-4 text-sm bg-fuchsia-200 p-2">
  <p>ORDER ID</p>
  <p>USERS</p>
  <p>AMOUNT</p>
  <p>ORDER DATE</p>
  <p>PAYMENT</p>
  <p>STATUS</p>
  <p>ITEMS</p>
  <p>UPDATE STATUS</p>
  <p>ACTIONS</p>
</div>
<div className="grid grid-cols-9 gap-4 text-sm text-gray-700 mt-2 p-2">
  <p>id 22</p>
  <p>user_Milon</p>
  <p>$700</p>
  <p>1 April 2025</p>
  <p>true</p>
  <p>Pending</p>
  <p>2</p>
  <details className="flex flex-col">
      <summary className="cursor-pointer text-gray-800 font-medium group-open:text-blue-600 flex justify-between">
        <span>Pending</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-gray-500" />
      </summary>
      <p>1ghjhhjggg</p>
      <p>2ghvcfgfcv</p>
  </details>
  <p>🛠️</p>
</div>
</div>
    </main>
  </div>);
};

export default Dashboard;
