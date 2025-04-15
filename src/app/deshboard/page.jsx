import MonthlySalseAnalysis from '@/components/deshboard/MonthlySalseAnalysis'
import Cart from '@/components/deshboard/Cart'
const Deshboard =()=>{
  return (<> 
 <p className="text-2xl px-10 mt-2.5">Deshboard</p>
 <div className="flex flex-wrap gap-12 justify-center items-center mt-4">
   <Cart 
   title="Active Users"
   value="12"
   />
      <Cart 
   title="Total Products"
   value="1254"
   />
      <Cart 
   title="Revinue"
   value="$56746"
   />
      <Cart 
   title="Conversion Rate"
   value="$123.2%"
   />
 </div>
 <MonthlySalseAnalysis />
  </>)
}
export default Deshboard;