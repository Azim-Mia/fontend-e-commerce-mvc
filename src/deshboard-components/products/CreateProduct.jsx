// components/ProductForm.jsx
'use client'; // if you're using Next.js App Router

import { useState } from "react";

export default function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // send data up
    setFormData({ name: "", sku: "", price: "", image: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 border rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-2">Create New Product</h2>
      
      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        name="sku"
        placeholder="SKU"
        value={formData.sku}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        type="number"
        step="0.01"
        className="w-full border rounded p-2"
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border rounded p-2"
        rows={3}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
}
