// src/app/deshboard/inventories/delete/[inventoryId]/page.tsx

import { notFound } from "next/navigation";

type Props = {
  params: {
    inventoryId: string;
  };
};

export default async function DeleteInventoryPage({ params }: Props) {
  const { inventoryId } = params;

  if (!inventoryId) {
    return notFound();
  }

  return (
    <div>
      <h1>Delete Inventory</h1>
      <p>Inventory ID: {inventoryId}</p>
    </div>
  );
}