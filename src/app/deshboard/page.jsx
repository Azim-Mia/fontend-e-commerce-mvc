import ActiveUser from '@/components/deshboard/ActiveUser'
import TotalProducts from '@/components/deshboard/TotalProducts'
import Revinew from '@/components/deshboard/Revinew'
import ConversionRate from '@/components/deshboard/Revinew';
const Deshboard =()=>{
  return (<> 
 <p>deshboard</p>
 <div>
   <ActiveUser />
   <TotalProducts />
   <Revinew />
   <ConversionRate />
 </div>
  </>)
}
export default Deshboard;