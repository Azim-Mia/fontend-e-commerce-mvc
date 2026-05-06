import { create } from "zustand";
import { persist } from "zustand/middleware";
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
      sessionId: "",
      message: null,

      addToCart: async (body, quantity) => {
        try {
          const session = get().sessionId;

          if (quantity > 0) {
            const { data } = await addToCartProduct(
              "http://localhost:3001/carts/add-to-cart",
              "post",
              body,
              session
            );

            const { carts, subtotal } = await findCartProducts(
              "http://localhost:3001",
              "cartContext",
              data.sessionId
            );

            set({
              cart: carts,
              cartCount: carts?.length || 0,
              message: data.message,
              subtotal: subtotal || 0,
              sessionId: data.sessionId,
            });

            toast(data.message);
            return;
          } else {
            toast("Please Quantity update now");
          }
        } catch (error) {
          toast(error.message);
          set({
            message:
              error instanceof Error ? error.message : "An error occurred",
          });
        }
      },

      removeFromCart: async (productId) => {
        try {
          const sessionId = get().sessionId;

          if (sessionId) {
            const { data } = await axios.get(
              `http://localhost:3001/carts/remove/item/${productId}`,
              {
                withCredentials: true,
                headers: { "x-card-session-id": sessionId },
              }
            );

            const cart = get().cart;

            const removedData = cart.filter(
              (item) => item.productId !== productId
            );

            set({
              cart: removedData,
              cartCount: removedData.length,
              message: data.message,
              subtotal: removedData.reduce(
                (sum, i) => sum + i.price * i.quantity,
                0
              ),
            });
          }
        } catch (err) {
          console.error("Remove cart item error:", err);
          toast(err.message);
        }
      },

      clearCart: () => set({ cart: [], cartCount: 0, subtotal: 0 }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        cart: state.cart,
        cartCount: state.cartCount,
        subtotal: state.subtotal,
        sessionId: state.sessionId,
      }),
    }
  )
);
