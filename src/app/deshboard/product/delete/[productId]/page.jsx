const DeleteProduct = async ({ params }) => {
  const productId = (await params).productId;
return (<>
  delete product : {productId}
</>)

};

export default DeleteProduct;
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
