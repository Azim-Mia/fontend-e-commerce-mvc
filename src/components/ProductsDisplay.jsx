import Link from 'next/link'
import Image from 'next/image'
import product_1 from '../assets/images/product_1.jpeg'

const ProductsDisplay = ({ products ,statickProduct}) => {
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

  return (<>
    <div className="cartStyle">
      {products.map((product) => (
        <div key={product.productId} className="group relative">
          <Link
            href={`/product/${product.productId}`}
            className="block bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
          >
            {/* 🖼️ Product Image */}
            <div className="relative w-full h-[400px] overflow-hidden rounded-t-2xl">
              <Image
                src={product_1}
                alt="product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* 💰 Price Overlay */}
              <span className="absolute top-3 right-3 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                ${product.price || '00.00'}
              </span>
            </div>

            {/* 🛒 Order Button */}
            <div className="p-4 text-center">
              <button className="bg-[#0a193a] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300">
                Order Now
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
    {/*section two*/}
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10">
      <div className="cartStyle">
        {statickProduct.map((item) => (
          <div key={item.id} className="group relative md:mt-8 mt-16">
            <Link
              href={`/product/${item.id}`}
              className="block bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* 🖼️ Product Image */}
              <div className="relative w-full h-[400px] overflow-hidden rounded-t-2xl">
                <Image
                  src={item.img || '/placeholder.png'}
                  alt="product"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* 💰 Price Overlay */}
                <div className="flex gap-4 relative justify-end p-1">
                <div className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  {item.price ? `$${item.price}` : '$20.00'}
                </div>
<div className="bg-indigo-500/90 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm hover:bg-indigo-700/90 transition-all duration-300 flex items-center justify-center">
  <del className="opacity-50 tracking-wide">{item.price ? `$${item.price}` : '$25.00'}</del>
</div>

                </div>
              </div>

              {/* 🛒 Order Button */}
              <div className="p-4 text-center">
                <button className="bg-[#0a193a] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300">
                  Order Now
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>)
}

export default ProductsDisplay