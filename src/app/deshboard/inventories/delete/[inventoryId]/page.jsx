const DeleteInventory =async({params})=>{
 const inventoryId =(await params).inventoryId;
  return (<>
    DeleteInventory {inventoryId}  </>)
}
export default DeleteInventory;
export async function generateStaticParams() {
  const products = [
    {
    inventoryId:1,
    name:'Matador',
  },
      {
    inventoryId:2,
    name:'Matador',
  },
  ]
  return products.map((data) => ({
    inventoryId: data.inventoryId.toString(),
  }));
}
