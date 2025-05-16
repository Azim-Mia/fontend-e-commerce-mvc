// components/OrderDetails.jsx
import React from 'react';

const OrderDetailsViews = ({ order }) => {
  const {
    subtotal,
    tax,
    grandTotal,
    payedStatus,
    status,
    createAt,
    orderItems,
  } = order;
  const formattedDate = new Date(createAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="p-6 bg-white shadow rounded-md space-y-4">
      <div className="mt-4">
        <h3 className="font-semibold">Items:</h3>
        {orderItems.map((itemWrapper, idx) => (
          itemWrapper.create.map((item, i) => (
            <div key={`${idx}-${i}`} className="border p-2 my-2 rounded">
             <div><strong>Buy Date :</strong> {formattedDate}</div>
              <div><strong>Product:</strong> {item.productName}</div>
              <div><strong>SKU:</strong> {item.sku}</div>
              <div><strong>Price:</strong> ${item.price}</div>
              <div><strong>Quantity:</strong> {item.quantity}</div>
              <div><strong>Total:</strong> ${item.total}</div>
            </div>
          ))
        ))}
      </div>

      <div className="mt-4">
        <div><strong>Subtotal:</strong> ${subtotal}</div>
        <div><strong>Tax:</strong> ${tax}</div>
        <div><strong>Grand Total:</strong> ${grandTotal}</div>
      </div>
    </div>
  );
};

export default OrderDetailsViews;
