'use client';
import React,{useState} from 'react';
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
  return (
    <div className="flex justify-self-start gap-2 w-full xs:xs-small">
      {/* Sidebar */}
      <aside className="flex flex-col xs:w-full w-1/3">
        <nav className="">
          <strong className="block text-xl font-semibold text-blue-600 mb-4">
            Dashboard Menu
          </strong>
          <Inventoris />
          <Products />
          <Orders />
          <Categories />
          <Others />
          <div>
        <button onClick={()=>setIsAnalysis((prev)=> !prev)}>Analysis AI</button>
          </div>
      </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full">
        {isAnalysis && <div className="text-white bg-black">Ai show</div>}
        {/* Summary Cards */}
        <div className="flex flex-wrap gap-6 px-2">
          <Cart title="Active Users" value="12" />
          <Cart title="Total Products" value="1,254" />
          <Cart title="Revenue" value="$56,746" />
          <Cart title="Conversion Rate" value="123.2%" />
        </div>

        {/* Sales Chart */}
        <div>
          <MonthlySalseAnalysis />
         <div className="xs:hidden"><Chat /></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
