import Link from 'next/link';
import Image from 'next/image';
import productDatas from '@/lips/productDatas';
const ProductList = ()=>{
  const productData = productDatas();
  console.log(productData)
  return (<div className="h-full w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <div className = "grid gap-4 xs:gap-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:flex 2xl:flex-wrap gap-12">
  {productData.map((item)=><Link href={`/mwc-fashion/${item.id}`} key={item.id}>
  <Image src={item.img} alt="product" className="object-containt"/>
  </Link>)}
  </div>
    </div>)
}
export default ProductList;