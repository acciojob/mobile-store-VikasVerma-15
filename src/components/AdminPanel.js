import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    const id = products.length + 1;
    setProducts([...products, { id, ...newProduct, price: Number(newProduct.price) }]);
    setNewProduct({ name: "", price: "" });
  };

  const handleEdit = (id) => {
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
      <div className="col-12">
        <input
          className="form-control"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button className="btn" onClick={addProduct}>
          Add
        </button>
      </div>

      {/* List of products */}
      {products.map((product, index) => (
        <div key={product.id} className="col-12">
          <div className="row">
            <div className="col-8">
              <a onClick={() => navigate(`/products/${product.id}`)}>
                {product.name}
              </a>
            </div>
            <div className="col-4 float-right">
              <button className="btn" onClick={() => handleEdit(product.id)}>
                Edit
              </button>
              <button className="btn" onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
