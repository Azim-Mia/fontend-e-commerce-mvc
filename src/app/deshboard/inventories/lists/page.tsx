'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 👉 Type define
type InventoryItem = {
  inventoryId: string;
  name: string;
  price: number;
  stock: number;
  sku: string;
};

const InventoryPage: React.FC = () => {
  const [data, setData] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const inventoryData: InventoryItem[] = [
      { inventoryId: 'jdjsd', name: 'Product A', price: 100, stock: 10, sku: 'Metador' },
      { inventoryId: 'sdhsddsd2', name: 'Product B', price: 200, stock: 5, sku: 'Metador' },
      { inventoryId: 'jffd', name: 'Product C', price: 300, stock: 8, sku: 'Metador' },
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
            <th className="border p-2">SKU</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2" colSpan={2}>
              Customize
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((item) => (
            <tr key={item.inventoryId} className="text-center">
              <td className="border p-2">{item.inventoryId}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.price}</td>
              <td className="border p-2">{item.sku}</td>
              <td className="border p-2">{item.stock}</td>

              <td className="border p-2">
                <Link
                  href={`/deshboard/inventories/update/${item.inventoryId}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </td>

              <td className="border p-2">
                <Link
                  href={`/deshboard/inventories/delete/${item.inventoryId}`}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;