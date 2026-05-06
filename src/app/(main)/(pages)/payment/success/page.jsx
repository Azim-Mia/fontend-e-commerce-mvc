'use client';
import React,{useEffect} from 'react';
import axios from 'axios';
const SuccessPayment =()=>{
      const remove = async()=>{
        await axios.post('http://localhost:3000/api/requestHeaders', { sessionId:'null'});
      }
      useEffect(()=>{
        remove()
      },[]);  
return (<div>
  <strong>Success Payment</strong>
</div>)
}
export default SuccessPayment;