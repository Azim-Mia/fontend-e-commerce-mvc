import Link from 'next/link';
import Image from 'next/image';
import productDatas from '@/lips/productDatas';
import ProductsDisplay from '@/components/ProductsDisplay';
import findAllProducts from '@/lips/findAllProducts';
import { Fullscreen } from 'lucide-react';

const ProductList = async () => {
   const api= process.env.SERVER_API;
  const url = `${api}/products/finds`;
  const productDataAll = productDatas();
  const { data } = await findAllProducts(url, 'findProductAll', {credentials:"include", method:"GET"});

  return (<>
  {/* <p>{JSON.stringify(data)}</p> */}
    <div className="h-full w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10">
      {/* Server Fetched Products */}
      <div className="mb-10">
        <ProductsDisplay products={data?.findProduct} />
      </div>

      {/* Local Product Cards */}
      <div className="cartStyle">
        {productDataAll.map((item) => (<div key={item.id} className='cartItem'>
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            {/* Image Placeholder */}
            <div className='flex justify-center'>
              <Image
                src={item.img || '/placeholder.png'}
                alt="product"
                width={200}
                height={200}
             />
            </div>

            {/* Card Body */}
            <div>
              <h3 className="text-xs font-semibold text-gray-800 mb-1 truncate">
                {item.name || 'Product Name'}
              </h3>
              <p className="text-[11px] text-gray-500 mb-2 line-clamp-2">
                {item.description || 'Short product description'}
              </p>
              <span className="text-sm font-bold text-indigo-600 block">
                {item.price ? `$${item.price}` : '$00.00'}
              </span>
              <button className='bg-[#0a193a]'>Order now</button>
            </div>
            <p>Descount details</p>
          </Link>
        </div>))}
      </div>
    </div>
  </>);
};

export default ProductList;
