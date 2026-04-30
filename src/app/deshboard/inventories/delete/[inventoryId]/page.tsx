const url = process.env.NEXT_PUBLIC_URL;

type Props = {
  params: {
    inventoryId: string;
  };
};

const DeleteInventory = ({ params }: Props) => {
  const inventoryId = params.inventoryId;

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