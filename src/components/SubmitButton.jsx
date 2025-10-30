'use client'
import { useState } from 'react';

const SubmitButton = (...info) => {
  const [
    url = '',
    method = 'GET',
    body = {},
    label = 'Submit',
    headers = {},
    onSuccess
  ] = info;

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: method !== 'GET' ? JSON.stringify(body) : null,
      });

      const data = await res.json();
      if (onSuccess) onSuccess(data);
    } catch (err) {
      console.error('Request failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`px-4 py-2 rounded-lg text-white font-medium ${
        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {loading ? 'Submitting...' : label}
    </button>
  );
};

export default SubmitButton;
