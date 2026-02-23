'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from '@/components/SubmitButton'
enum MODL {
  LOGIN = "LOGIN",
  LogOut = "LogOut"
}

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();
  return (
    <div className="w-full max-w-4xl px-4 md:px-8 flex flex-col items-center justify-center text-center mt-24">
      <form className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <div className="flex flex-col gap-2">
            <label className="text-left text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-left text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 border rounded-md"
            />
          </div>
<SubmitButton
  url="http://localhost:3001/auth/users/login"
  method="POST"
  body={{email: userEmail, password:password}}
  label="LogIn"
  onSuccess={(data) => setMessage(data?.message)}
/>
        <p className="text-sm text-gray-700 mt-2">{message}</p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
