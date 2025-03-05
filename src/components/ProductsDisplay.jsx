'use client'
import Link from 'next/link';
const ProductsDisplay = ({products})=>{
  return (<>
    <div className = "grid gap-4 xs:gap-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:flex 2xl:flex-wrap gap-12">
  {products?.map((product)=><Link href={`/fontend-e-commerce-mvc/${product.productId}`} key={product.productId}>
  <p>{product.name}</p>
  <p>{product.price}</p>
  </Link>)}
  </div>
  </>)
}
export default ProductsDisplay;