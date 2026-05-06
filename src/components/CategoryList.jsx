"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import productDatas from "@/lips/productDatas";

const CategoryList = () => {
  const productData = productDatas();
  const scrollRef = useRef(null); // ✅ শুধু null, TypeScript type নাই

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let direction = 1;

    const autoScroll = setInterval(() => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += 1 * direction;

      // ✅ Edge এ গেলে দিক পরিবর্তন
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        direction = -1;
      } else if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }
    }, 20); // speed control

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="mt-10 xl:mt-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 2xl:px-64">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Shop by Category
      </h2>

      {/* Auto Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
      >
        {productData.map((data) => (
          <Link
            href="/list?cart=test"
            key={data.id}
            className="flex-shrink-0 w-36 sm:w-44 md:w-52 lg:w-56 text-center group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-32 sm:h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-xl">
              <Image
                src={data.img || "/placeholder.png"}
                alt="category"
                fill
                sizes="25vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="py-3">
              <h1 className="text-sm sm:text-base font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors duration-300 truncate">
                Category Name
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
