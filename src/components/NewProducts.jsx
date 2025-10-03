import Link from 'next/link';
import Image from 'next/image';
import productDatas from '@/lips/productDatas';

const NewProducts = () => {
  const productData = productDatas();

  return (
    <div className="xl:mt-24 px-4 bg-gray-50 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-x-scroll md:scrollbar-hide lg:scrollbar-hide xl:scrollbar-hide 2xl:scrollbar-hide">
      <div className="flex gap-6 mr-2">
        {productData.map((data) => (
          <Link
            href="/list?cart=test"
            key={data.id}
            className="flex-shrink-0 w-40 sm:w-56 lg:w-64 text-center group"
          >
            {/* Card Container */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
              {/* Image Wrapper */}
              <div className="w-full h-40 sm:h-56 lg:h-64 relative overflow-hidden">
                <Image
                  src={data.img || '/placeholder.png'}
                  alt="product"
                  fill
                  sizes="20vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-125"
                />
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Category / Title */}
            <h1 className="mt-4 font-semibold text-sm sm:text-base text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
              Category Name
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
