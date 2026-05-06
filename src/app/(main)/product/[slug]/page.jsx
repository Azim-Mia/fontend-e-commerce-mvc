export const dynamic = "force-dynamic";

import findSingle from "@/lips/findSingle";
import ProductImages from "@/components/ProductImages";
import AddToCart from "@/components/AddToCart";

const SinglePage = async ({ params }) => {
  const productId = params.slug;
  let data = null;

  try {
    const response = await findSingle(
      `http://localhost:3001/products/find/${productId}`,
      "get"
    );
    data = response.data;
  } catch (error) {
    console.error("Product fetch error:", error);
  }

  if (!data) {
    return <p>Product not found</p>;
  }

  return (
    <div className="px-4 gap-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col sm:flex-row">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20">
        <ProductImages images={data.images} />
      </div>

      {/* Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">{data.name}</h1>
        <p className="text-gray-500">{data.description}</p>

        <div className="flex items-center gap-4">
          <h2 className="line-through text-gray-400">
            ${data.originalPrice}
          </h2>
          <h3 className="text-2xl font-medium">
            ${data.salePrice}
          </h3>
        </div>

        <div className="bg-gray-100 p-4">
          <AddToCart data={data} />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
