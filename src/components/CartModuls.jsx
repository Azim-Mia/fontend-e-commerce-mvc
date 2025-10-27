'use client';
import React, { useState } from 'react';
import { useCartStore } from '../contexts/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MiniCart() {
  const cart = useCartStore(state => state.cart);
  const cartCount = useCartStore(state => state.cartCount);
 // const fetchCart = useCartStore(state => state.fetchCart);
  
  const subtotal = useCartStore(state => state.subtotal);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const clearCart = useCartStore(state => state.clearCart);
  return (
    <div className="">
        { subtotal > 0 ? <div className="relative flex flex-col right-0 top-full w-80 border border-gray-300 bg-white p-4 shadow-lg z-50 flex flex-col gap-4">
            <div>
              <ul className="flex flex-col gap-3 max-h-60 overflow-y-auto">
                {cart && cart.map(item => (
                  <li
                    key={item.productId}
                    className="flex justify-between items-center border-b border-gray-200 pb-2"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-600">
                        Quantity: {item.quantity} | Price: ${item.price * item.quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center font-semibold mt-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>

              <button
                onClick={clearCart}
                className="mt-2 w-full py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
        </div>:<p className="text-center">Enpty</p>}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
