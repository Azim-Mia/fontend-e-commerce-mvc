
const UpdateInventory = async({params})=>{
 const inventoryId =(await params).inventoryId;
  return (<>
    {inventoryId}
    UpdateInventory
  </>)
}
export default UpdateInventory;