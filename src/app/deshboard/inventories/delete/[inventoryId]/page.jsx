const DeleteInventory =async({params})=>{
 const inventoryId =(await params).inventoryId;
  return (<>
    DeleteInventory {inventoryId}  </>)
}
export default DeleteInventory;