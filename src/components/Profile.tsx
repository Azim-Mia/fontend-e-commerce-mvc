'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import findSingle from '@/lips/findSingle';

// mock data for fallback
const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, New York, NY',
  joined: 'January 2024',
  avatar: '/avatar-placeholder.png', // fallback avatar image
};

// Define type for expected API response
type ApiResponse = {
  success: boolean;
  data: {
    name: string;
    email: string;
    // Add more fields here if needed
  };
};

const Profile = () => {
  const [info, setInfo] = useState<ApiResponse | null>(null);
  const [errors, setError] = useState<unknown>(null);

  const fetchData = async () => {
    const url = 'http://localhost:3001/profile/find';

    try {
      const { data } = await findSingle(url, 'get');
      setInfo(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Redirect to login if not authenticated
  if (info?.success === false) {
    redirect('/login');
  }

  return (
    <>
      {errors && (
        <p className="text-red-500 text-center mb-4">
          {(errors as Error).message || 'Something went wrong'}
        </p>
      )}
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-4">
          <Image
            src={mockUser.avatar}
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />

          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              {info?.data?.name || mockUser.name}
            </h2>
            <p className="text-gray-600">
              {info?.data?.email || mockUser.email}
            </p>
            <p className="text-gray-600">{mockUser.phone}</p>
          </div>

          <div className="w-full border-t border-gray-200 pt-4 text-gray-700">
            <p>
              <strong>Address:</strong> {mockUser.address}
            </p>
            <p>
              <strong>Member Since:</strong> {mockUser.joined}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
