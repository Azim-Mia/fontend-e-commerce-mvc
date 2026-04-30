const url = process.env.URL;

const DeleteInventory = ({ params }) => {
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
      console.log("Deleted:", data);
      alert("Inventory deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Delete failed!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Delete Inventory Page</h1>

      <p>Inventory ID: {inventoryId}</p>
      <p>URL: {url}</p>

      <button
        onClick={handleDelete}
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteInventory;