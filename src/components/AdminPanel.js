import React, { useState } from "react";
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
      {
        id: Date.now(),
        ...form,
        price: Number(form.price)
      }
    ]);
  };

  const deleteProduct = id => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updatePrice = (id, price) => {
    setProducts(
      products.map(p =>
        p.id === id ? { ...p, price: Number(price) } : p
      )
    );
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <input className="form-control" placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="form-control" placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="form-control" placeholder="Image URL"
        onChange={e => setForm({ ...form, image: e.target.value })} />
      <input className="form-control" placeholder="Price"
        onChange={e => setForm({ ...form, price: e.target.value })} />

      <button onClick={addProduct}>Add</button>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>

            <button
              className="float-right"
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>

            <button
              className="float-right"
              onClick={() => updatePrice(p.id, p.price + 100)}
            >
              Save
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
