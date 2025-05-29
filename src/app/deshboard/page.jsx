'use client';
import React,{useState} from 'react';
import MonthlySalseAnalysis from '@/components/deshboard/MonthlySalseAnalysis';
import Chat from '@/components/chats/Chat'
import Cart from '@/components/deshboard/Cart';
import Link from 'next/link';
import Inventoris from '@/components/deshboard/linkPage/Inventoris';
import Products from '@/components/deshboard/linkPage/Products'
import Categories from '@/components/deshboard/linkPage/Categories'
import Orders from '@/components/deshboard/linkPage/Orders'
import Others from '@/components/deshboard/linkPage/Others'
const Dashboard = () => {
  const [isAnalysis, setIsAnalysis] = useState(false)
  return (
    <div className="min-h-screen flex bg-gray-100 p-4">

      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <nav className="space-y-2">
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
      <main className="flex-1 ml-6">
        {isAnalysis && <div className="text-white h-[80vh] w-full bg-black">Ai show</div>}
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Cart title="Active Users" value="12" />
          <Cart title="Total Products" value="1,254" />
          <Cart title="Revenue" value="$56,746" />
          <Cart title="Conversion Rate" value="123.2%" />
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <MonthlySalseAnalysis />
                <Chat />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
