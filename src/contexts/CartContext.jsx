
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
      sessionId:'',
      message: null,
      loading: false,
      addToCart: async (body) => {
        set({ loading: true });
        try {
         const session = get().sessionId;
          const { data } = await addToCartProduct('http://localhost:3001/carts/add-to-cart', 'post', body,session)
          const { carts, subtotal } = await findCartProducts(data.sessionId);
          set({
            cart: carts,
            cartCount: carts?.length || 0,
            subtotal: subtotal || 0,
            sessionId:data.sessionId,
          });
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
const sessionId = get().sessionId;
          if (sessionId) {
      const {data} =  await axios.get(
              `http://localhost:3001/carts/me/item/${productId}`,
              {
                withCredentials: true,
                headers: { "x-card-session-id": sessionId},
              }
            );
          const cart =await get().cart;
    const removedData =cart.filter(
          (item) => item.productId !== productId
            );
           set({
             cart:removedData,
             cartCount:removedData.length,
              subtotal:removedData.reduce(
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
        sessionId: state.sessionId,
      }), // ✅ শুধু এগুলো persist হবে
    }
  )
);