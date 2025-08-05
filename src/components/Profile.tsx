'use client';
// app/profile/page.tsx
import React,{useEffect,useState} from "react";
import {redirect} from 'next/navigation';
import findSingle from '@/lips/findSingle'
const mockUser = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, New Yorpk, NY",
  joined: "January 2024",
  avatar: "/avatar-placeholder.png", // Replace with actual avatar image path or API
};

 const Profile =()=>{
   const [info, setInfo] =useState(null);
   const [errors, setError] = useState(null);
const fetchData =async()=>{
  const url = "http://localhost:3001/profile/find"
  const {data, error} = await findSingle(url,'get');
setInfo(data);
setError(error);
}
useEffect(()=>{
  fetchData();
},[])
if(info?.success == false){
     redirect('/login');
   } 
  return (<>
    {error && <p>{error}</p>}
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-4">
        <img
          src={mockUser.avatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
        />

        <div className="text-center">
          <h2 className="text-2xl font-semibold">{mockUser.name}</h2>
          <p className="text-gray-600">{info ? info.data.email:mockUser.email}</p>
          <p className="text-gray-600">{mockUser.phone}</p>
        </div>

        <div className="w-full border-t border-gray-200 pt-4 text-gray-700">
          <p><strong>Address:</strong> {mockUser.address}</p>
          <p><strong>Member Since:</strong> {mockUser.joined}</p>
        </div>
      </div>
    </main>
  </>);
}
export default Profile;