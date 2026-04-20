'use client';

import React, { useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage = () => {
  // 🛒 Demo cart data
  const [cart] = useState<CartItem[]>([
    { id: '1', name: 'T-Shirt', price: 20, quantity: 2 },
    { id: '2', name: 'Shoes', price: 50, quantity: 1 },
  ]);

  // 👤 Customer info
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [loading, setLoading] = useState(false);

  // 💰 total calculation
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🚀 place order
  const handleOrder = async () => {
    if (!customerName || !phone || !address) {
      alert('Please fill all fields');
      return;
    }

    const orderData = {
      customerName,
      phone,
      address,
      items: cart,
      total,
      status: 'pending',
      createdAt: new Date(),
    };

    try {
      setLoading(true);

      // 👉 API call (optional)
      const res = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert('Order placed successfully ✅');
      } else {
        alert('Order failed ❌');
      }
    } catch (error) {
      console.log(error);
      alert('Error placing order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold">Checkout</h2>

      {/* 👤 Customer Info */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full border p-2"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2"
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2"
        />
      </div>

      {/* 🛒 Cart Items */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Your Items</h3>
        <div className="border p-3 space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 💰 Total */}
      <div className="flex justify-between text-lg font-bold">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      {/* 🚀 Order Button */}
      <button
        onClick={handleOrder}
        disabled={loading}
        className="w-full bg-black text-white p-3 rounded"
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
    </div>
  );
};

export default CheckoutPage;