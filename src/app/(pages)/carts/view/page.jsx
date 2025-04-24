import ViewCart from '@/components/ViewCart'
import ProductList  from '@/components/ProductList'
const ViewCartPage =()=>{
  return (<>
 <div className="w-auto h-[400px] text-center"> 
 <ViewCart />
 </div>
  <ProductList />
  </>)
}
export default ViewCartPage