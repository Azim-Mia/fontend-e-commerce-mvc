import productDatas from '@/lips/productDatas';
import ProductImages from '@/components/ProductImages';
import CustomizeProducts from '@/components/CustomizeProducts';
import AddQuantity from '@/components/AddQuantity';
const SinglePage=async({params})=>{
 const productId =(await params).slug;
  return (<div className="px-4 gap-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col sm:flex-row sm:gap-4 md:flex-row lg:flex-row ">
{/*Image Container*/}
<div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
<ProductImages />
</div>
<div className="w-full lg:w-1/2 flex flex-col  gap-6">
<h1 className="text-4xl font-medium font-semibold">Product Name</h1>
<p className="text-gray-500">Vollagen is a complex of Amino Acids in the same proportion as those found in Collagen
Collagen is the main structural protein of skin, hair, nails, ligaments and tendons. Native Collagen can't be absorbed by the body and must be hydrolysed to free the Amino Acids. Vollagen 1000mg supplies your body with the Amino Acids, ready to be absorbed and from 100% non-animal sources. It's the vegan answer to Collagen!
</p>
<div className="h-[2px] bg-gray-100">
<div className="flex item-center gap-4">
<h2 className="text-xl text-gray-500 line-through">$49</h2>
<h3 className="font-medium text-2xl ">$39</h3>
</div>
</div>
<div className="bg-gray-100">
<CustomizeProducts />
<AddQuantity />
</div>
{/*Text Container*/}
<div>
<h2>Title</h2>
<p>this is good product</p>
</div>
</div>
  </div>)
}
export default SinglePage;
  //This page is modify static optimise
  export async function generateStaticParams(){
    const products =await productDatas()
    return products.map((data)=>({
      slug:data.id.toString(),
    }));
  };
