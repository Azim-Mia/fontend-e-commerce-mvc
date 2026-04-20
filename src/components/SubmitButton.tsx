'use client';

import React, { useState } from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type SubmitButtonProps = {
  url: string;
  method?: HttpMethod;
  label?: string;
  body?: Record<string, unknown>; // ❌ any removed (safe type)
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  url,
  method = 'POST',
  label = 'Submit',
  body,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // Delete confirmation
    if (label.toLowerCase() === 'delete') {
      const confirmDelete = window.confirm('Are you sure you want to delete?');
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

      alert(`${label} success ✅`);
    } catch (error) {
      console.error(error);
      alert(`${label} failed ❌`);
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
          : label.toLowerCase() === 'delete'
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {loading ? 'Processing...' : label}
    </button>
  );
};

export default SubmitButton;