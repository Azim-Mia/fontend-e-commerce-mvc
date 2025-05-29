const OrderUpdate = async({params})=>{
 const orderId =(await params).orderId;
  return (<>
    {orderId}
    OrderUpdate
  </>)
}
export default OrderUpdate;