
const UpdateProduct = async({params})=>{
 const productId =(await params).productId;
  return (<>
    {productId}
    UpdateProduct
  </>)
}
export default UpdateProduct;
export async function generateStaticParams() {
  const products = [
    {
    productId:1,
    name:'Matador',
  },
      {
    productId:2,
    name:'Matador',
  },
  ]
  return products.map((data) => ({
    productId: data.productId.toString(),
  }));
}