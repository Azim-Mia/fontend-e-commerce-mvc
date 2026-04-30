"use client";

const url = process.env.URL ?? "";

type Props = {
  params: Promise<{
    inventoryId: string;
  }>;
};

const DeleteInventory = async ({ params }: Props) => {
  const { inventoryId } = await params;

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `/api/inventories/delete/${inventoryId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      console.log(data);

      alert("Deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Delete failed!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Delete Inventory</h1>

      <p>ID: {inventoryId}</p>
      <p>URL: {url}</p>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteInventory;