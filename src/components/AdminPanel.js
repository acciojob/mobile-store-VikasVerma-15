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
      {products.map((product) => (
        <div
          key={product.id}
          data-cy={`product-${product.id}`} // unique container for Cypress
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          {/* Only name is clickable */}
          <Link data-cy={`link-${product.id}`} to={`/products/${product.id}`}>
            {product.name}
          </Link>

          {/* Buttons inside the same wrapper */}
          <button
            className="btn edit"
            data-cy={`edit-${product.id}`}
            onClick={() => editProduct(product.id)}
          >
            Edit
          </button>
          <button
            className="btn delete"
            data-cy={`delete-${product.id}`}
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


