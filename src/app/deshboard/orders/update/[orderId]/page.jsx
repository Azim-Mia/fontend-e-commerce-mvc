const OrderUpdate = async({params})=>{
 const orderId =(await params).orderId;
  return (<>
    {orderId}
    OrderUpdate
  </>)
}
export default OrderUpdate;
export default DeleteProduct;
export async function generateStaticParams() {
  const products = [
    {
    orderId:1,
    name:'Matador',
  },
      {
    orderId:2,
    name:'Matador',
  },
  ]
  return products.map((data) => ({
    orderId: data.orderId.toString(),
  }));
}