// components/OrderDetails.jsx
import React from "react";

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

  const formattedDate = new Date(createAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl space-y-6 border border-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Items Section */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">Ordered Items</h3>
        <div className="space-y-4">
          {orderItems.map((itemWrapper, idx) =>
            itemWrapper.create.map((item, i) => (
              <div
                key={`${idx}-${i}`}
                className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Buy Date: {formattedDate}
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.productName}
                    </p>
                    <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      Price:{" "}
                      <span className="font-medium text-gray-800">
                        ${item.price}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity:{" "}
                      <span className="font-medium text-gray-800">
                        {item.quantity}
                      </span>
                    </p>
                    <p className="text-sm font-semibold text-indigo-600">
                      Total: ${item.total}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Summary Section */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax:</span>
          <span className="font-medium">${tax}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Grand Total:</span>
          <span className="text-indigo-600">${grandTotal}</span>
        </div>
      </div>

      {/* Payment Status */}
      <div className="mt-2">
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
            payedStatus === "Paid"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {payedStatus === "Paid" ? "Payment Completed" : "Payment Pending"}
        </span>
      </div>
    </div>
  );
};

export default OrderDetailsViews;
