'use client';

import React, { useState } from 'react';

type SubmitButtonProps = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  lable?: string;
  body?: any;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  url,
  method = 'POST',
  lable = 'Submit',
  body,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // 👉 Delete হলে confirm দেখাবে
    if (lable.toLowerCase() === 'delete') {
      const confirmDelete = confirm('Are you sure you want to delete?');
      if (!confirmDelete) return;
    }

    try {
      setLoading(true);

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      // 👉 success message
      alert(`${lable} success ✅`);
    } catch (error) {
      console.error(error);
      alert(`${lable} failed ❌`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`px-3 py-1 rounded text-white transition ${
        loading
          ? 'bg-gray-400 cursor-not-allowed'
          : lable.toLowerCase() === 'delete'
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {loading ? 'Processing...' : lable}
    </button>
  );
};

export default SubmitButton;