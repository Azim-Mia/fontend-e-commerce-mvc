import InventoryUpdateForm from '@/components/deshboard/InventoryUpdateForm';
export default function UpdateInventoryPage({ params }) {
  const inventoryId = params.inventoryId;
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Update Inventory Item {inventoryId}</h1>
      <InventoryUpdateForm />
    </div>
  );
}
export async function generateStaticParams() {
  const products = [
    {
    inventoryId:1,
    name:'Matador',
  },
      {
    inventoryId:2,
    name:'Matador',
  },
  ]
  return products.map((data) => ({
    slug: data.id.toString(),
  }));
}
