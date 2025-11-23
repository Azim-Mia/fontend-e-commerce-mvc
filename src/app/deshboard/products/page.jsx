import Image from 'next/image';
import product_1 from '@/assets/images/product_1.jpeg'
const DeshboardProductsPage = async ({ params }) => {
  const productId = (await params).productId;

  const dataProducts = [
    {
      productId: 1,
      inventoryId: "fshuw8wyege82",
      name: "Matador pin point",
      image: "Matador_1.jpg",
      price: "$200",
      createAt: "12.07.2025",
      brand: "Metador",
      category: "Matador Bag",
    },
        {
      productId: 2,
      inventoryId: "fshuw8w90yege82",
      name: "Serpener",
      image: "Matador_2.jpg",
      price: "$230",
      createAt: "12.07.2025",
      brand: "Metador",
      category: "Matador Stationary",
    }
  ];

  return (
    <div className="h-[700px] p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>
<div className="flex justify-between p-4">
  <div>hhh</div>
  <div>yuggy</div>
</div>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr className="text-left">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Brand</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Created At</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {dataProducts.map((product) => (
              <tr
                key={product.productId}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{product.productId}</td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.brand}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">{product.price}</td>
                <td className="py-3 px-4">
                  <Image src={product_1} alt='product' className="h-16 w-16" />
                  </td>
                <td className="py-3 px-4">{product.createAt}</td>

                <td className="py-3 px-4 flex gap-2 justify-center">
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-blue-600 transition">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-blue-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeshboardProductsPage;
