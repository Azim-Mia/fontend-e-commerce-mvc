// components/AddToCartButton.js
import { useCartStore } from "@/contexts/CartContext";

export default function AddToCartButton() {
  const { addToCart } = useCartStore();
  return (
    <button onClick={addToCart}>
      Add to Cart
    </button>
  );
}
