
const url = process.env.NEXT_PUBLIC_URL ?? "";

type Props = {
  params: {
    inventoryId: string;
  };
};

export function generateStaticParams() {
  return [
    { inventoryId: "1" },
    { inventoryId: "2" },
    { inventoryId: "3" },
  ];
}

const DeleteInventory = ({ params }: Props) => {
  const inventoryId = params.inventoryId;
  return (
    <div style={{ padding: "20px" }}>
      <h1>Delete Inventory</h1>

      <p>ID: {inventoryId}</p>
      <p>URL: {url}</p>

      <button>
        Delete
      </button>
    </div>
  );
};

export default DeleteInventory;