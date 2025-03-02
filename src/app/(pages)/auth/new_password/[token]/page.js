"use client"; // Ensures this runs on the client side

import { useParams,redirect } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const PasswordPage = () => {
  const { token } = useParams(); // Get token from URL
  const sliceToken = token?.slice(3) || ""; // Prevent errors if token is undefined

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    try {
       await axios.post(
        `http://localhost:3001/auth/users/password/forget/verify/${sliceToken}`,
        { password:password }
      );
      setSuccess("Password updated successfully!");
      redirect('/login')
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-3 items-center justify-center text-center mt-24 relative">
      <h2 className="text-xl font-bold">Reset Password</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      
      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-8 mt-12 items-center text-center gap-6 bg-gray-200 rounded-md p-4">
        <label className="mt-4">
          New Password:
          <input
            type="password"
            name="password"
            placeholder="New Password"
            className="ring-1 ring-black p-2 sm:ml-6 xm:ml-1 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="ring-1 ring-black p-2 border"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default PasswordPage;
