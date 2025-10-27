import { useCartStore } from '../contexts/CartContext';

const CartLength = () => {
  const cartCount = useCartStore(state => state.cartCount);
  return <span>{cartCount}</span>;
};

export default CartLength;
