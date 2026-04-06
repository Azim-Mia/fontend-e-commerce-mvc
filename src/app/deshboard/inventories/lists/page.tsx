'use client'
import { string } from 'prop-types';
import React, { useState, useEffect } from 'react';

// 👉 Type define
type InventoryItem = {
  productId:string;
  inventoryId:string;
  name: string;
  price: number;
  stock: number;
};

const InventoryPage: React.FC = () => {
  const [data, setData] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const inventoryData: InventoryItem[] = [
      { inventoryId: 1, name: 'Product A', price: 100, stock: 10 },
      { inventoryId: 2, name: 'Product B', price: 200, stock: 5 },
      { inventoryId: 3, name: 'Product C', price: 300, stock: 8 },
    ];

    setData(inventoryData);
  }, []);

  return (
    <div className="p-4">
      <table className="border border-collapse w-full">
        <caption className="mb-2 font-bold text-lg">
          Inventory List
        </caption>

        {/* Header */}
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((item: InventoryItem) => (
            <tr key={item.inventoryId} className="text-center">
              <td className="border p-2">{item.inventoryId}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.price}</td>
              <td className="border p-2">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;