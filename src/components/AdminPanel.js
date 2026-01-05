import React, { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const addProduct = () => {
    setProducts([
      ...products,
      { ...form, id: products.length + 1 }
    ]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container">

      {/* ADD PRODUCT */}
      <input className="form-control" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="form-control" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="form-control" onChange={e => setForm({ ...form, image: e.target.value })} />
      <input className="form-control" onChange={e => setForm({ ...form, price: e.target.value })} />

      <button onClick={addProduct}>Add</button>

      {/* PRODUCT LIST */}
      {products.map((p) => (
        <div key={p.id} className="row">
          <div className="col-6">
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </div>

          <div className="col-3">
            <button
              className="float-right"
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>
          </div>

          <div className="col-3">
            <button className="float-right">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
