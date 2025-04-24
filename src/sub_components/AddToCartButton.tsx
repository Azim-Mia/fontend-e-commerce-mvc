// components/AddToCartButton.js
import { useCart } from "@/contexts/CartContext";

export default function AddToCartButton() {
  const { addToCart } = useCart();
  return (
    <button onClick={addToCart}>
      Add to Cart
    </button>
  );
}
