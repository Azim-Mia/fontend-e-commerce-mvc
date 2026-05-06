'use client';
import React from 'react';
import Link from 'next/link';
import { useCartStore } from '../contexts/CartContext.jsx';

export default function MiniCart({ hideCartModule }) {
  const cart = useCartStore(state => state.cart);
  const subtotal = useCartStore(state => state.subtotal);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const clearCart = useCartStore(state => state.clearCart);

  return (
    <div className="absolute right-8 top-16 w-[380px] z-50">
      {subtotal > 0 ? (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-50">
            <h2 className="text-md font-semibold">🛒 Shopping Cart</h2>
            <button
              onClick={() => hideCartModule(false)}
              className="text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="max-h-72 overflow-y-auto px-4 py-3 flex flex-col gap-3">
            {cart.map(item => (
              <div
                key={item.productId}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-xl hover:shadow transition"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.quantity} × ${item.price}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">
                    ${item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-400 hover:text-red-600 text-xs"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t p-4 flex flex-col gap-3 bg-white">

            {/* Subtotal */}
            <div className="flex justify-between items-center text-md font-semibold">
              <span>Total</span>
              <span className="text-green-600">${subtotal}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">

              <Link href="/carts/view" className="w-full">
                <button className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm">
                  View Cart
                </button>
              </Link>

              <Link href="/checkout" className="w-full">
                <button className="w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition text-sm flex justify-center items-center gap-2">
                  💳 Checkout
                </button>
              </Link>

            </div>

            {/* Clear */}
            <button
              onClick={clearCart}
              className="text-xs text-red-500 hover:underline text-center"
            >
              Clear Cart
            </button>

          </div>

        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <p className="text-gray-500 mb-2">🛒 Your cart is empty</p>
          <Link href="/">
            <button className="text-sm text-blue-500 hover:underline">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}