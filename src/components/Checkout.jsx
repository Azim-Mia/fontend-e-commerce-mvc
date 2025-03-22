'use client';
import { useState } from "react";

export default function Checkout() {
    const [formData, setFormData] = useState({
        cartSessionId: "",
        userName: "",
        userEmail: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send data to API route
        const response = await fetch("http://localhost:3001/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Checkout Successful!");
            setFormData({ cartSessionId: "", userName: "", userEmail: "", address: "" });
        } else {
            alert("Checkout Failed!");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Checkout Form</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <label>Cart Session ID:</label>
                <input type="text" name="cartSessionId" value={formData.cartSessionId} onChange={handleChange} required />

                <label>Full Name:</label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} required />

                <label>Shipping Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

                <button type="submit" style={{ marginTop: "10px", background: "#28a745", color: "white", padding: "10px" }}>Checkout</button>
            </form>
        </div>
    );
}
