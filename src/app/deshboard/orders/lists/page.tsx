'use client';

import React, { useState } from 'react';

type Order = {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
};

const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      customerName: 'Azim',
      total: 120,
      status: 'completed',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      customerName: 'Rahim',
      total: 80,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      customerName: 'Karim',
      total: 200,
      status: 'cancelled',
      createdAt: new Date().toISOString(),
    },
  ]);

  const handleStatusChange = (id: string, newStatus: Order['status']) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Order List</h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className='border p-2'>Cus_Phone</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.customerName}</td>
              <td className='border p-2'>+0745456</td>
              <td className="border p-2">${order.total}</td>

              {/* 🔥 Dropdown Status */}
              <td className="border p-2">
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(
                      order.id,
                      e.target.value as Order['status']
                    )
                  }
                  className={`px-2 py-1 rounded text-black ${
                    order.status === 'completed'
                      ? 'bg-green-500'
                      : order.status === 'pending'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  <option value="pending" className="text-black">
                    Pending
                  </option>
                  <option value="completed" className="text-black">
                    Completed
                  </option>
                  <option value="cancelled" className="text-black">
                    Cancelled
                  </option>
                </select>
              </td>

              <td className="border p-2">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;