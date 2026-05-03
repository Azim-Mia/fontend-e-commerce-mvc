const url = process.env.URL || "";

type Props = {
  params: {
    inventoryId: string;
  };
};

export default function DeleteInventory({ params }: Props) {
  const inventoryId = params.inventoryId;

  return (
    <div>
      <h1>Delete Inventory</h1>
      <p>ID: {inventoryId}</p>
      <p>URL: {url}</p>
    </div>
  );
}