import Link from 'next/link';
import Image from 'next/image';
import productDatas from '@/lips/productDatas';
const NewProducts = ()=>{
  const productData = productDatas();
  return (<div className="mt-10 xl:mt-24 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-x-scroll md:scrollbar-hide lg:scrollbar-hide xl:scrollbar-hide 2xl:scrollbar-hide">
<div className="flex gap-4 md:gap-8 sm:w-1/2 md:w-1/4 mr-2">
{productData.map((data)=><Link href="/list?cart=test" key={data.id} className="flex-shrink-0 w-full xs:w-1/2  sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full xs:h-48 sm:h-96">
<Image src={data.img} alt="product" fill sizes="20vw" className="object-cover xs:h-32"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
)}
</div>
  </div>)
}
export default NewProducts;