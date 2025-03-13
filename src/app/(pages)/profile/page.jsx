'use client';
import {useState, useEffect} from 'react'
import {redirect} from 'next/navigation';
import findSingle from '@/lips/findSingle'
import axios from 'axios';
const ProfilePage =()=>{
  const [info, setInfo] = useState({});
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');
   // const router = useRouter()
const url = "http://localhost:3001/profile/find/12e9d19e-6c74-4f29-bc94-e779bb3b89f6"
const fetchData =async()=>{
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
  <p>dara:{JSON.stringify(info)}</p>
    <p>{error?.message}</p>
  </>)
}
export default ProfilePage;