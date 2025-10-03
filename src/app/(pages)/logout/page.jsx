'use client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

const LogoutPage = () => {
    const handleLogout =async()=>{ 
     await axios.get('http://localhost:3001/auth/users/logout',{withCredentials:true})
      redirect('/login');
      }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 w-[380px] text-center border border-white/40">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-white drop-shadow mb-3">
          Confirm Logout
        </h2>
        <p className="text-gray-100 mb-6">
          Are you sure you want to log out?
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            Yes, Logout
          </button>
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
