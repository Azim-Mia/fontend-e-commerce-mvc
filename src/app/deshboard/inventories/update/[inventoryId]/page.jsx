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
