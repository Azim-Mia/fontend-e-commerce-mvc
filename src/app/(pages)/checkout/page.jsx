'use client';
import { useState } from "react";
import axios from "axios"; // Import axios
export default function CheckOutPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    post_code: "",
    district: "",
    thana: "",
  });

  const [message, setMessage] = useState('');
  const [datas, setDatas] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestId = await axios.get('http://localhost:3000/api/requestHeaders');
      const cardSessionId = requestId.headers['x-card-session-id'] || 'null';
  
      if (cardSessionId !== 'null') {
        const formDatas = {
     name:formData.name,
     phone:formData.phone,
     address:formData.address,
     post_code:formData.post_code,
     thana:formData.thana,
     district:formData.district,
   cardSessionId:cardSessionId };
        const response = await axios.request({
          method:'post',
          withCredentials:true,
         url:"http://localhost:3001/payment",
          data:formDatas,
        });
        const data = await response.data;
        window.location.replace(data.url);
        // Await response.json()
        setDatas(data); // Store response data instead of setting formData
        setMessage("Order submitted successfully!");
      } else {
        setMessage("Session ID not found.");
      }
    } catch (error) {
      setMessage(error.message); // Use error.message to avoid object issues
    }
  };

  return (
    <div className="flex justify-center items-center mt-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gray gap-8 p-4 rounded-md font-semibold text-sm"
      >
     <p>{message}</p>
   <h1 className="text-center">Order Details</h1>

        <label htmlFor="name" className="flex flex-inline gap-10">
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="ring-1 ring-black rounded-md text-center"
          />
        </label>

        <label htmlFor="phone" className="flex flex-inline gap-9">
          Phone :
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="ring-1 ring-black rounded-md text-center"
          />
        </label>

        <label htmlFor="district" className="flex flex-inline gap-7">
          District :
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="District"
            required
            className="ring-1 ring-black rounded-md text-center"
          />
        </label>

        <label htmlFor="thana" className="flex flex-inline gap-9">
          Thana :
          <input
            type="text"
            name="thana"
            value={formData.thana}
            onChange={handleChange}
            placeholder="Thana"
            required
            className="ring-1 ring-black rounded-md text-center"
          />
        </label>

        <label htmlFor="address" className="flex flex-inline gap-6">
          Address :
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="ring-1 ring-black rounded-md text-center"
          />
        </label>

        <label htmlFor="post_code" className="flex flex-inline gap-1">
          Post Code :
          <input
            type="text"
            name="post_code"
            value={formData.post_code}
            onChange={handleChange}
            placeholder="Post Code"
            required
            className="ring-1 ring-black rounded-md text-center"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
