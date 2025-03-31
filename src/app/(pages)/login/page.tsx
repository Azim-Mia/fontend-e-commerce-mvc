'use client';
import PropTypes from 'prop-types';
import React,{useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const LoginPage =()=>{
  const [mode, setMode] = useState('LOGIN');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] =useState('');
  const [emailCode, setEmailCode] = useState<number | null>(null);
  const [resetPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
const router = useRouter();
enum MODL {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
    RESET_PASSWORD = "RESET_PASSWORD"
  }

  const formTitle = mode === MODL.LOGIN 
  ? "Login now" : mode === MODL.REGISTER 
  ? "Register now" : mode === MODL.RESET_PASSWORD ? "Reset your password" : "Verify your Email";
  const buttonTitle = mode === MODL.LOGIN 
  ? "Login" : mode === MODL.REGISTER 
  ? "Register" : mode === MODL.RESET_PASSWORD ? "Reset" : "Verify";
 // const wixClient = useWixClient();
 const handleSubmit= async(e: React.FormEvent<HTMLFormElement>)=>{
   try{
    e.preventDefault();
    axios.defaults.withCredentials = true;
   if(mode === 'RESET_PASSWORD'){
     setIsLoading(true)
     const forgetEmail = {
       email:userEmail
     }
  const {data} = await axios.post('http://localhost:3001/auth/users/password/forget',forgetEmail); 
   if(data.success == true){
       toast(data?.message);
       setIsLoading(false);
   }
    }else if(mode === 'EMAIL_VERIFICATION'){
      setIsLoading(true)
    //send varification code
    console.log(userEmail)
   }else if(mode === 'REGISTER'){
   setIsLoading(true)
   axios.defaults.withCredentials = true;
   const user = {
     name:userName,
       email:userEmail,
       password:password,
     }
   const {data} = await axios.post('http://localhost:3001/auth/users/register',user);
     //send create user
    if(data.success == true){
      toast(data?.message)
      setMessage(data?.message)
    setIsLoading(false)
    }
   }else if(mode === 'LOGIN'){
     //send login request
     setIsLoading(true)
axios.defaults.withCredentials = true;
     const user = {
       email:userEmail,
       password:password,
     }
     const {data} = await axios.post('http://localhost:3001/auth/users/login',user)
     if(data.success == true){
       router.push('/profile');
       setMessage(data?.message);
       setIsLoading(false)
     }
     console.log(userName,password, userEmail,emailCode,resetPassword)
   }else{
     setMessage('Something problem, Try again.')
   }
   }catch(err:unknown){
    if(err instanceof Error){
      if(err.status === 400){
        toast("User Already Register")
      }else if(err.status === 404){
        toast("User is not Match")
      }else{
     toast(err.message)
      setMessage(err);
      }
    }
     setIsLoading(false);
   } 
   setUserName('')
   setUserEmail('')
   setPassword('')
 }
  return (<div className ="w-[calc({100vh-80px}] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col gap-3 items-center justify-center text-center mt-24 relative">
  <form className="flex flex-col justify-center items-center text-center gap-4 bg-gray rounded-md p-2" onSubmit={handleSubmit}> 
 <h1 className = "text-2xl font-semibold">{formTitle}</h1>
    { mode === MODL.REGISTER ? (<div className="flex flex-row xs:flex-col justify-center text-center items-center xs:gap-3">
      <label className="text-2xl text-white font-semibold">Username : </label>
    <input type="text" id="userName" required name="username" placeholder="Enter Name" onChange={(e)=>setUserName(e.target.value)} value={userName} className="p-2 ring-2 ring-gary-100 rounded-md text-center cursor-pointer" /> 
    </div>
    ):null}
    { mode === MODL.RESET_PASSWORD || mode === MODL.LOGIN || mode === MODL.REGISTER ? (<div className="flex flex-row xs:flex-col text-center justify-center items-center xs:gap-3 xs:p-2 xs:text-1xl">
    <label className="text-2xl font-semibold text-white">E-mail : </label>
    <input type="email" id="email" required name="email" placeholder="example@gmail.com"  className="p-2 ring-2 ring-gary-100 rounded-md text-center cursor-pointer" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail}/> 
    </div>
    ):null}
    { mode === MODL.LOGIN || mode === MODL.REGISTER ? (<div className="flex flex-col md:flex-row lg:flex-row text-center justify-center items-center xs:gap-3 xs:p-2 xs:text-1xl">
      <label className="text-2xl text-white font-semibold">Password : </label>
    <input type="password" id="password" required name="password" placeholder="Enter Password" className="ring-2 ring-gary-100 rounded-md text-center p-2 cursor-pointer" onChange={(e)=>setPassword(e.target.value)} value={password}/> 
    </div>
    ):null}
     { mode === MODL.EMAIL_VERIFICATION ? (<div className="flex flex-wrap text-center items-center gap-2">
      <label className="text-2xl text-white font-semibold">Code: </label>
    <input type="number" id="Code" required name="Code" placeholder="verification code" className="p-2 ring-2 ring-gary-100 rounded-md cursor-pointer text-center" onChange={(e) => setEmailCode(Number(e.target.value))}/> 
    </div>
    ):null}
    {mode === MODL.LOGIN && (<div><button onClick={()=>setMode(MODL.RESET_PASSWORD)}><p className="text-white font-semibold">Forgot Password</p></button></div>)}
      {mode === MODL.EMAIL_VERIFICATION && (<div className="flex gap-4">
      <p onClick={()=>setMode(MODL.RESET_PASSWORD)}>Go Beack</p>
      <button type="submit" className="text-blue text-1.5xl font-semibold">Resend</button></div>)} 
    
 <button type="submit" className= "text-1xl font-semibold py-2 px-6 bg-black text-white rounded-md disabled:cursor-not-allowed" disabled={isLoading}>{isLoading ? "Loading...":buttonTitle}</button>
 {mode === MODL.LOGIN && (<div onClick={()=>setMode(MODL.REGISTER)}>{"Don't"} have , <br/> an Account? <button type="submit" className="text-blue">Register now</button></div>)}
{mode === MODL.REGISTER && (<div>Already Register? <button onClick={()=>setMode(MODL.LOGIN)}><p className="text-blue font-semibold">Login</p></button></div>)}
{mode === MODL.RESET_PASSWORD && (<div className="flex gap-3 text-white"><p onClick={()=>setMode(MODL.LOGIN)}>Go back to</p>
<button className="text-blue font-semibold" onClick={()=>setMode(MODL.LOGIN)}>Login</button></div>)}
<ToastContainer className ="text-2xl font-semibold mt-24"/>
<p>{message}</p>
  </form>
  </div>)
}
LoginPage.propTypes = {
  //other properties
  message: PropTypes.string.isRequired,
};
export default LoginPage