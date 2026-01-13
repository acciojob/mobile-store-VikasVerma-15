import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    const id = products.length + 1;
    setProducts([
      ...products,
      { id, name: newProduct.name, price: Number(newProduct.price) },
    ]);
    setNewProduct({ name: "", price: "" });
  };

  const editProduct = (id) => {
    const price = prompt("Enter new price:");
    if (!price) return;
    setProducts(
      products.map((p) => (p.id === id ? { ...p, price: Number(price) } : p))
    );
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      {/* Add product form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          className="form-control"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          className="form-control"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <button className="btn" onClick={addProduct}>
          Add
        </button>
      </div>

      {/* Product list */}
      {products.map((product, idx) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          {/* Only the name is clickable link */}
          <Link to={`/products/${product.id}`}>{product.name}</Link>

          {/* Edit/Delete buttons separated */}
          <button
            className="btn"
            style={{ marginLeft: "10px" }}
            onClick={() => editProduct(product.id)}
          >
            Edit
          </button>
          <button
            className="btn"
            style={{ marginLeft: "10px" }}
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;

