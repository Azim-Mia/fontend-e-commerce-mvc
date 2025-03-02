'use client';
import {redirect} from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
const LogoutPage =()=>{
  const handleLogout =async()=>{
    const {data} = await axios.get('http://localhost:3001/auth/users/logout');
    redirect('/login');
  }
  return (<div className="flex gap-6 justify-center items-center mt-24">
<button onClick={handleLogout} className="bg-black text-white font-semibold py-1 px-4 rounded-md">Confirm</button>
<Link href='/' className="bg-black text-white font-semibold py-1 px-4 rounded-md">Cancel</Link>
  </div>)
}
export default LogoutPage;