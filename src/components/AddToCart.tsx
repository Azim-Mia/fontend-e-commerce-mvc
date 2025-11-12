'use client';
import React, { useState } from 'react';
import CustomizeProducts from '@/components/CustomizeProducts';
import { useCartStore } from '../contexts/CartContext.jsx'; // Zustand store
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AddToCartProps = {
  data: {
    findProduct: {
      inventoryId: string;
      productId: string;
    };
  };
};

const AddToCart: React.FC<AddToCartProps> = ({ data }) => {
  const addToCart = useCartStore(state => state.addToCart);
  const message = useCartStore(state => state.message);

  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  const inventoryId = data?.findProduct?.inventoryId;
  const productId = data?.findProduct?.productId;

  const body = {
    inventoryId,
    productId,
    quantity,
    color,
    size,
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    setDisabled(false)
  };

  const handleQuantityIncrement = () =>{
     setQuantity(quantity + 1)
setDisabled(false)
  };
  const handleColor = (selectedColor: string) => setColor(selectedColor);
  const handleSize = (selectedSize: string) => setSize(selectedSize);

  const handleAddToCart = async () => {
    await addToCart(body,quantity);
    setDisabled(true)
  };

  return (
    <>
      <CustomizeProducts onHandleColor={handleColor} onHandleSize={handleSize} />

      <div className="flex flex-col gap-4 mt-4">
        {message && <p className="text-sm text-green-600">{message}</p>}

        <h4 className="text-sm font-sm">Choose a Quantity</h4>

        <div className="flex justify-between flex-wrap items-center gap-6 lg:gap-8">
          <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="flex gap-4">
              <button
                type="button"
                className="text-2xl py-1 px-4 bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-amber-900"
                onClick={handleQuantityDecrement}
              >
                -
              </button>
              <button
                type="button"
                className="text-2xl py-1 px-4 bg-gray-200 rounded-lg hover:bg-gray-400 hover:text-amber-900"
                onClick={handleQuantityIncrement}
              >
                +
              </button>
            </div>
            <p className="text-sm bg-[#eeffcc] py-2 px-4 rounded-md">Quantity: {quantity}</p>
          </div>

          <button disabled={disabled}
            type="button"
            onClick={handleAddToCart}
            className="w-32 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama
             hover:text-white disabled:cursor-not-allowed disabled:bg-blue disabled:text-black disabled:ring-none"
          >
            Add to cart
          </button>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default AddToCart;
