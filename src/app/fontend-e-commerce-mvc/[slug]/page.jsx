import findSingle from '@/lips/findSingle';
import productDatas from '@/lips/productDatas';
import ProductImages from '@/components/ProductImages';
import AddQuantity from '@/components/AddQuantity';

const SinglePage = async ({ params }) => {
  const productId = params.slug;
  const url = `http://localhost:3001/products/find/${productId}`;

  let data = null;
  let error = null;

  try {
    const response = await findSingle(url, 'get');
    data = response.data;
  } catch (err) {
    error = err;
  }

  if (!data) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className="px-4 gap-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col sm:flex-row sm:gap-4 md:flex-row lg:flex-row">
      {error && <p>{error?.response?.message || 'An error occurred'}</p>}

      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium font-semibold">{data.name || 'Product Name'}</h1>
        <p className="text-gray-500">{data.description || 'Product description goes here.'}</p>

        <div className="h-[2px] bg-gray-100">
          <div className="flex items-center gap-4">
            <h2 className="text-xl text-gray-500 line-through">${data.originalPrice || '49'}</h2>
            <h3 className="font-medium text-2xl">${data.salePrice || '39'}</h3>
          </div>
        </div>

        <div className="bg-gray-100">
          <AddQuantity data={data} />
        </div>

        {/* Additional Info */}
        <div>
          <h2>Title</h2>
          <p>This is a good product</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

// Generate Static Params (for Static Optimization)
export async function generateStaticParams() {
  const products = await productDatas();
  return products.map((data) => ({
    slug: data.id.toString(),
  }));
}
