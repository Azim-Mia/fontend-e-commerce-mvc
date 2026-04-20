'use client';

import React, { useState } from 'react';
import SubmitButton from '@/components/SubmitButton';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-4xl px-4 md:px-8 flex flex-col items-center justify-center text-center mt-24">
      <form className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md shadow-md w-full max-w-md">
        
        <h1 className="text-2xl font-semibold">Admin Login</h1>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-left text-gray-700 font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="example@gmail.com"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            className="p-2 border rounded-md"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-left text-gray-700 font-medium">Password</label>
          <input
            type="password"
            required
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <SubmitButton
          url="http://localhost:3001/auth/users/login"
          method="POST"
          body={{ email: userEmail, password }}
          label="Login"
        />
        
      </form>
    </div>
  );
};

export default LoginPage;