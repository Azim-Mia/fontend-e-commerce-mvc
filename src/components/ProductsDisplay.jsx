'use client'
import Link from 'next/link'
import Image from 'next/image'
import product_1 from '../assets/images/product_1.jpeg'

const ProductsDisplay = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <Image
          src="/images/empty.png" // ✅ public/images/empty.png
          alt="No products"
          width={150}
          height={150}
          className="opacity-70"
        />
        <p className="mt-4 text-lg font-medium">No products found</p>
      </div>
    )
  }

  return (
    <div className="cartStyle">
      {products.map((product) => (<div key={product.productId} className='cartItem '>
        <Link
          href={`/product/${product.productId}`}
          key={product.productId}
          className=""
        >
          <div className='flex justify-center'>
            <Image
              src={product_1} alt="product"
            width={200}
              height={200} 
              />
          </div>
          <div className="flex justify-around mt-3">
            <p className="truncate text-sm font-medium text-gray-900">
              {product.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-indigo-600">
              ${product.price}
            </p>
          </div>
            <button className='bg-[#0a193a]'>Order Now</button>
          <div className='text-center'>Discount details added</div>
        </Link>
      </div>))}
    </div>
  )
}

export default ProductsDisplay
