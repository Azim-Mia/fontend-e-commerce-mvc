const DeleteProduct = async ({ params }) => {
  const productId = (await params).productId;
return (<>
  delete product
</>)

};

export default DeleteProduct;
export async function generateStaticParams() {
  const products = [
    {
    id:1,
    name:'Matador',
  },
      {
    id:2,
    name:'Matador',
  },
  ]
  return products.map((data) => ({
    slug: data.id.toString(),
  }));
}
