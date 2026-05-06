// app/products/page.jsx
import ProductsDisplay from '@/components/ProductsDisplay'
import staticProducts  from '@/lips/productDatas'
import next from 'next';
export default async function ProductsPage() {
  // ✅ একসাথে fetch করবো API ও static data
const dynamicProducts = await fetch('http://localhost:3001/products/finds',{
  next:{revalidate:600},
}).then(res=> res.ok ? res.json() : staticProducts)
  .catch(()=>staticProducts)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <ProductsDisplay
        products={dynamicProducts?.findProduct || []}
        statickProduct={staticProducts}
      />
    </div>
  );
}
