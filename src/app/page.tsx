//import Image from "next/image";
import Slider from '@/components/Slider';
import ProductList  from '@/components/ProductList'
import NewProducts from '@/components/NewProducts'
import CategoryList from  '@/components/CategoryList'
export default function HomePage() {
  return (<div className="flex flex-col gap-8" >
  <div><Slider /></div>
    <div>
        <div>
  <h1 className="text-3xl p-2">Features Products</h1>
  <ProductList />
  </div>
  <h1 className="text-3xl p-2">Category Products</h1>
  <CategoryList />
  </div>
  <div>
  <h1 className="text-3xl p-2">New Products</h1>
<NewProducts />
  </div>
  </div>);
}
