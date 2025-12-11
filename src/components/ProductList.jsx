// app/products/page.jsx
import ProductsDisplay from '@/components/ProductsDisplay'
import '@/lips/productDatas'
export default async function ProductsPage() {
  // ✅ একসাথে fetch করবো API ও static data
  const [productsRes, staticData] = await Promise.all([
    fetch(`http://localhost:3001/products/finds`, {
      next: { revalidate: 600 }, // প্রতি ৬০ সেকেন্ডে cache refresh হবে
    }),
     import('@/lips/productDatas'), // static file import
  ]);

  const productsJson = await productsRes.json();
  const statickProduct = staticData.default();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <ProductsDisplay
        products={productsJson?.findProduct || []}
        statickProduct={statickProduct}
      />
    </div>
  );
}
