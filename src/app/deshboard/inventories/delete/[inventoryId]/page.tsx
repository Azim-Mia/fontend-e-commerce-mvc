const url = process.env.URL || "";

type Props = {
  params: Promise<{
    inventoryId: string;
  }>;
};

export default async function DeleteInventory({ params }: Props) {
  const { inventoryId } = await params;

  return (
    <div>
      <h1>Delete Inventory</h1>
      <p>ID: {inventoryId}</p>
      <p>URL: {url}</p>
    </div>
  );
}