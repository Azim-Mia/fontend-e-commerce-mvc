'use client'
import Link from 'next/link'
import Image from 'next/image'

const ProductsDisplay = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <Image
          src="/empty-box.png" // 👉 public ফোল্ডারে একটা empty ইমেজ রাখুন
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
    <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {products.map((product) => (
        <Link
          href={`/fontend-e-commerce-mvc/${product.productId}`}
          key={product.productId}
          className="group block rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-lg"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>

          <div className="mt-3">
            <p className="truncate text-sm font-medium text-gray-900">
              {product.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-indigo-600">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductsDisplay
