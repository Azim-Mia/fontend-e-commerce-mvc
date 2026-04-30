const url = process.env.URL;
const DeleteInventory = ({params})=>{
 const inventoryId = params.inventoryId;
  return (<>
    DeleteInventory {inventoryId}  
    {url}
    </>)
}
export default DeleteInventory;