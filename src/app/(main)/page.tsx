import { Suspense } from "react";
import Slider from '@/components/Slider'
import ProductList  from '@/components/ProductList'
import NewProducts from '@/components/NewProducts'
import CategoryList from  '@/components/CategoryList'

export default function HomePage() {

  return (
    <div className="flex flex-col gap-8">
      
      <div>
        <Slider />
      </div>

      <div>
        <h1 className="text-3xl p-2">Features Products</h1>
        <Suspense fallback={<p>Loading Featured Products...</p>}>
          <ProductList />
        </Suspense>
      </div>

      <div>
        <h1 className="text-3xl p-2">Category Products</h1>
        <Suspense fallback={<p>Loading Categories...</p>}>
          <CategoryList />
        </Suspense>
      </div>

      <div>
        <h1 className="text-3xl p-2">New Products</h1>
        <Suspense fallback={<p>Loading New Products...</p>}>
          <NewProducts />
        </Suspense>
      </div>

    </div>
  );
}