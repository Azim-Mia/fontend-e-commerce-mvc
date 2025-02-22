'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [mode, setMode] = useState<'LOGIN' | 'REGISTER' | 'EMAIL_VERIFICATION' | 'RESET_PASSWORD'>('LOGIN');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCode, setEmailCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const formTitle =
    mode === 'LOGIN' ? 'Login now' :
    mode === 'REGISTER' ? 'Register now' :
    mode === 'RESET_PASSWORD' ? 'Reset your password' : 'Verify your Email';

  const buttonTitle =
    mode === 'LOGIN' ? 'Login' :
    mode === 'REGISTER' ? 'Register' :
    mode === 'RESET_PASSWORD' ? 'Reset' : 'Verify';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      axios.defaults.withCredentials = true;

      if (mode === 'RESET_PASSWORD') {
        setMode('EMAIL_VERIFICATION');
      } else if (mode === 'EMAIL_VERIFICATION') {
        console.log(userEmail);
      } else if (mode === 'REGISTER') {
        alert('REGISTER');
      } else if (mode === 'LOGIN') {
        const user = { email: userEmail, password };
        const { data } = await axios.post('http://localhost:3001/auth/users/login', user);

        if (data.success) {
          router.push('/profile');
          setMessage(data.message);
          setError(null);
        }
      } else {
        setError('Something went wrong, please try again.');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-3 items-center justify-center text-center mt-24 relative">
      <form className="flex flex-col justify-center items-center text-center gap-4 bg-gray-800 rounded-md p-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>

        {mode === 'REGISTER' && (
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold">Username:</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter Name"
              className="p-2 ring-2 ring-gray-100 rounded-md text-center"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}

        {(mode === 'LOGIN' || mode === 'REGISTER' || mode === 'RESET_PASSWORD') && (
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold">E-mail:</label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="p-2 ring-2 ring-gray-100 rounded-md text-center"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
        )}

        {(mode === 'LOGIN' || mode === 'REGISTER') && (
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold">Password:</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter Password"
              className="p-2 ring-2 ring-gray-100 rounded-md text-center"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        {mode === 'EMAIL_VERIFICATION' && (
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold">Verification Code:</label>
            <input
              type="number"
              id="Code"
              required
              placeholder="Enter code"
              className="p-2 ring-2 ring-gray-100 rounded-md text-center"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}

        {mode === 'LOGIN' && (
          <button
            type="button"
            onClick={() => setMode('RESET_PASSWORD')}
            className="text-white font-semibold mt-2"
          >
            Forgot Password?
          </button>
        )}

        {mode === 'EMAIL_VERIFICATION' && (
          <div className="flex gap-4">
            <p className="text-white cursor-pointer" onClick={() => setMode('RESET_PASSWORD')}>Go Back</p>
            <button type="button" className="text-blue-500 font-semibold" onClick={handleSubmit}>Resend</button>
          </div>
        )}

        <button type="submit" className="text-lg font-semibold py-2 px-6 bg-black text-white rounded-md disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading ? "Loading..." : buttonTitle}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        {mode === 'LOGIN' && (
          <div>
            <p className="text-white">Don't have an account?</p>
            <button type="button" className="text-blue-500" onClick={() => setMode('REGISTER')}>Register now</button>
          </div>
        )}

        {mode === 'REGISTER' && (
          <div>
            <p className="text-white">Already Registered?</p>
            <button type="button" className="text-blue-500 font-semibold" onClick={() => setMode('LOGIN')}>Login</button>
          </div>
        )}

        {mode === 'RESET_PASSWORD' && (
          <div className="flex gap-3 text-white">
            <p className="cursor-pointer" onClick={() => setMode('LOGIN')}>Go back to</p>
            <p className="text-blue-500 font-semibold cursor-pointer" onClick={() => setMode('EMAIL_VERIFICATION')}>Login</p>
          </div>
        )}

        {message && <div className="text-white">{message}</div>}
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  message: PropTypes.string,
};

export default LoginPage;
