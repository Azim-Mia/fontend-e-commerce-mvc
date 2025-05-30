'use client';

import React from 'react';
import Link from 'next/link';

export default function InventoryList({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {data?.result?.map((item) => (
        <div key={item?._id} className="bg-white rounded-2xl shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold">SKU: {item?.sku}</h2>
            <span
              className={`px-2 py-1 text-sm rounded ${
                item?.actionType === 'IN'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {item?.actionType}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-1">
            Product ID: <span className="text-gray-800">{item?.productId}</span>
          </p>

          <Link
            href={`/deshboard/inventories/update/${item?.inventoryId}`}
            className="inline-block mt-1 text-sm text-blue-600 hover:underline"
          >
            Update
          </Link>

          <p className="text-sm text-gray-500 mb-1">
            Inventory ID: <span className="text-gray-800">{item?.inventoryId}</span>
          </p>
          <Link
            href={`/deshboard/product/update/${item?.productId}`}
            className="inline-block mt-1 text-sm text-blue-600 hover:underline"
          >
            Update
          </Link>
          <p className="text-sm text-gray-500 mb-2">
            Quantity: <span className="text-gray-800 font-medium">{item?.quantity}</span>
          </p>

          <div className="text-xs text-gray-600 border-t pt-2 mt-2">
            <p className="font-semibold">Latest Change:</p>
            <p>
              {item?.historis[0]?.actionType} {item?.historis[0]?.quantityChange} unit — from{' '}
              {item?.historis[0]?.lastQuantity} to {item?.historis[0]?.newQuantity}
            </p>
            <p>At: {new Date(item?.createAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
