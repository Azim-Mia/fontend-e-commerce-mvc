import ActiveUser from '@/components/deshboard/ActiveUser'
import TotalProducts from '@/components/deshboard/TotalProducts'
import Revinew from '@/components/deshboard/Revinew'
import ConversionRate from '@/components/deshboard/ConversionRate';
import MonthlySalseAnalysis from '@/components/deshboard/MonthlySalseAnalysis'
const Deshboard =()=>{
  return (<> 
 <p className="text-2xl px-10 mt-2.5">Deshboard</p>
 <div className="flex flex-wrap gap-12 justify-center items-center mt-4">
   <ActiveUser />
   <TotalProducts />
   <Revinew />
   <ConversionRate />
 </div>
 <MonthlySalseAnalysis />
  </>)
}
export default Deshboard;