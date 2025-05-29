const DeleteProduct = async({params})=>{
 const productId =(await params).productId;
  return (<>
    {productId}
    UpdateProduct
  </>)
}
export default DeleteProduct;