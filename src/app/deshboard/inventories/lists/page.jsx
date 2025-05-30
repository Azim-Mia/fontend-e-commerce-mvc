import getItem from '@/lips/getItem';
import InventoryList from '@/components/deshboard/inventories/InventoryList'
const InventoryPage = async()=>{
  const data = await getItem('http://localhost:3001/inventoris/finds');
return (<>
  <InventoryList data ={data} />
</>)
  }
  export default InventoryPage;