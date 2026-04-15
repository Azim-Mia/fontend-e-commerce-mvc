const url = process.env.URL;
const DeleteInventory =async({params})=>{
 const inventoryId =(await params).inventoryId;
  return (<>
    DeleteInventory {inventoryId}  
    {url}
    </>)
}
export default DeleteInventory;