'use client';
import { useState } from "react";
export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    items: [{ name: "", quantity: 1, price: 0 }],
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      const updatedItems = [...formData.items];
      updatedItems[index][name] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: 1, price: 0 }],
    });
  };

  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      items: [{ name: "", quantity: 1, price: 0 }],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Order Form</h2>

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <label>Address:</label>
      <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

      <h3>Items</h3>
      {formData.items.map((item, index) => (
        <div key={index} className="item-row">
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={(e) => handleChange(e, index)}
            placeholder="Item Name"
            required
          />
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={(e) => handleChange(e, index)}
            min="1"
            required
          />
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={(e) => handleChange(e, index)}
            min="0"
            required
          />
          <button type="button" onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={addItem}>Add Item</button>
      <button type="submit">Submit Order</button>
    </form>
  );
}
