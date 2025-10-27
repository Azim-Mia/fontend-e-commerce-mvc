// stores/cartStore.js
"use client"
import { create } from "zustand";
import { persist } from "zustand/middleware";  // ✅ persist add
import findCartProducts from "@/lips/findCartProducts";
import addToCartProduct from "@/lips/addToCartProduct";
import axios from "axios";
import { toast } from "react-toastify";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      cartCount: 0,
      subtotal: 0,
      message: null,
      loading: false,

      fetchCart: async () => {
        set({ loading: true });
        try {
          const { carts, subtotal } = await findCartProducts();
          set({
            cart: carts,
            cartCount: carts?.length || 0,
            subtotal: subtotal || 0,
          });
        } catch (err) {
          console.error("Cart fetch error:", err);
        } finally {
          set({ loading: false });
        }
      },

      addToCart: async (body) => {
        set({ loading: true });
        try {
          const requestId = await axios.get("http://localhost:3000/api/requestHeaders");
          const existsId = requestId.headers["x-card-session-id"] || "null";

          let data;

          if (existsId !== "null") {
            const response = await addToCartProduct(
              "http://localhost:3001/carts/add-to-cart",
              "post",
              body,
              existsId
            );
            data = response.data;
          } else {
            const response = await addToCartProduct(
              "http://localhost:3001/carts/add-to-cart",
              "post",
              body
            );
            data = response.data;
            await axios.post("http://localhost:3000/api/requestHeaders", {
              sessionId: data.sessionId,
            });
          }

          await get().fetchCart();
          toast(data?.message);
        } catch (error) {
          set({
            message:
              error instanceof Error ? error.message : "An error occurred",
          });
        } finally {
          set({ loading: false });
        }
      },

      removeFromCart: async (productId) => {
        try {
          const requestId = await axios.get("http://localhost:3000/api/requestHeaders");
          const existsId = requestId.headers["x-card-session-id"] || "null";

          if (existsId !== "null") {
            const response = await axios.get(
              `http://localhost:3001/carts/me/item/${productId}`,
              {
                withCredentials: true,
                headers: { "x-card-session-id": existsId },
              }
            );

            const removedData = response.data.cart.filter(
              (item) => item.productId !== productId
            );
            set({
              cart: removedData,
              cartCount: removedData.length,
              subtotal: removedData.reduce(
                (sum, i) => sum + i.price * i.quantity,
                0
              ),
            });
          }
        } catch (err) {
          console.error("Remove cart item error:", err);
        }
      },

      clearCart: () =>
        set({ cart: [], cartCount: 0, subtotal: 0 }),
    }),
    {
      name: "cart-storage", // localStorage key ✅
      partialize: (state) => ({
        cart: state.cart,
        cartCount: state.cartCount,
        subtotal: state.subtotal,
      }), // ✅ শুধু এগুলো persist হবে
    }
  )
);
