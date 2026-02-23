'use client'
import { useState } from 'react';

type SubmitButtonProps = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
  label?: string;
  headers?: Record<string, string>;
  onSuccess?: (data: any) => void;
};

const SubmitButton = ({
  url,
  method = 'GET',
  body = {},
  label = 'Submit',
  headers = {},
  onSuccess,
}: SubmitButtonProps) => {

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: method !== 'GET' ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();

      onSuccess?.(data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:bg-gray-400"
    >
      {loading ? 'Submitting...' : label}
    </button>
  );
};

export default SubmitButton;
