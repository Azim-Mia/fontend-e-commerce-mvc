import { useCart } from '../contexts/CartContext';

const CartLength = () => {
  const { cartCount } = useCart();

  return <span>{cartCount}</span>;
};

export default CartLength;
