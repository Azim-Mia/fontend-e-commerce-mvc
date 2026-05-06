'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

enum MODL {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
  RESET_PASSWORD = "RESET_PASSWORD"
}

const LoginPage = () => {
  const [mode, setMode] = useState<MODL>(MODL.LOGIN);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCode, setEmailCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();

  const formTitle =
    mode === MODL.LOGIN ? "Login now" :
    mode === MODL.REGISTER ? "Register now" :
    mode === MODL.RESET_PASSWORD ? "Reset your password" :
    "Verify your Email";

  const buttonTitle =
    mode === MODL.LOGIN ? "Login" :
    mode === MODL.REGISTER ? "Register" :
    mode === MODL.RESET_PASSWORD ? "Reset" :
    "Verify";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    axios.defaults.withCredentials = true;

    try {
      if (mode === MODL.RESET_PASSWORD) {
        const forgetEmail = { email: userEmail };
        const { data } = await axios.post('http://localhost:3001/auth/users/password/forget', forgetEmail);
        if (data.success) {
          toast(data.message);
        }

      } else if (mode === MODL.EMAIL_VERIFICATION) {
        console.log("Verify code:", emailCode);

      } else if (mode === MODL.REGISTER) {
        const user = {
          name: userName,
          email: userEmail,
          password: password,
        };
        const { data } = await axios.post('http://localhost:3001/auth/users/register', user);
        if (data.success) {
          toast(data.message);
          setMessage(data.message);
        }

      } else if (mode === MODL.LOGIN) {
        const user = {
          email: userEmail,
          password: password,
        };
        const { data } = await axios.post('http://localhost:3001/auth/users/login',user);
        if (data.success) {
          toast(data.message);
          setMessage(data.message);
          router.push('/profile');
        }
      } else {
        setMessage('Something went wrong, please try again.');
      }

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        if (status === 400) {
          toast("User Already Registered");
        } else if (status === 404) {
          toast("User Not Found");
        } else {
          toast(err.response?.data?.message || "Something went wrong");
        }
      } else if (err instanceof Error) {
        toast(err.message);
      } else {
        toast("Unknown error occurred");
      }
    } finally {
      setIsLoading(false);
      setUserName('');
      setUserEmail('');
      setPassword('');
    }
  };

  return (
    <div className="w-full max-w-4xl px-4 md:px-8 flex flex-col items-center justify-center text-center mt-24">
      <form className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>

        {mode === MODL.REGISTER && (
          <div className="flex flex-col gap-2">
            <label className="text-left text-gray-700 font-medium">Username</label>
            <input
              type="text"
              id="userName"
              required
              placeholder="Enter Name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="p-2 border rounded-md"
            />
          </div>
        )}

        {(mode === MODL.LOGIN || mode === MODL.REGISTER || mode === MODL.RESET_PASSWORD) && (
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
        )}

        {(mode === MODL.LOGIN || mode === MODL.REGISTER) && (
          <div className="flex flex-col gap-2">
            <label className="text-left text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 border rounded-md"
            />
          </div>
        )}

        {mode === MODL.EMAIL_VERIFICATION && (
          <div className="flex flex-col gap-2">
            <label className="text-left text-gray-700 font-medium">Verification Code</label>
            <input
              type="number"
              id="code"
              required
              placeholder="Enter code"
              onChange={(e) => setEmailCode(Number(e.target.value))}
              className="p-2 border rounded-md"
            />
          </div>
        )}

        {mode === MODL.LOGIN && (
          <div className="text-sm text-blue-600 cursor-pointer hover_btn" onClick={() => setMode(MODL.RESET_PASSWORD)}>
            Forgot Password?
          </div>
        )}

        {mode === MODL.EMAIL_VERIFICATION && (
          <div className="flex justify-between text-sm">
            <span className="cursor-pointer text-blue-600" onClick={() => setMode(MODL.RESET_PASSWORD)}>Go Back</span>
            <button type="submit" className="text-blue-600 font-semibold">Resend</button>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50"
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>

        {mode === MODL.LOGIN && (
          <div className="text-sm mt-2">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setMode(MODL.REGISTER)}
              className="text-blue-600 font-semibold"
            >
              Register now
            </button>
          </div>
        )}

        {mode === MODL.REGISTER && (
          <div className="text-sm mt-2">
            Already registered?{" "}
            <button
              type="button"
              onClick={() => setMode(MODL.LOGIN)}
              className="text-blue-600 font-semibold"
            >
              Login
            </button>
          </div>
        )}

        {mode === MODL.RESET_PASSWORD && (
          <div className="text-sm mt-2">
            <span className="text-gray-600">Go back to </span>
            <button
              type="button"
              onClick={() => setMode(MODL.LOGIN)}
              className="text-blue-600 font-semibold"
            >
              Login
            </button>
          </div>
        )}

        <p className="text-sm text-gray-700 mt-2">{message}</p>
      </form>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
