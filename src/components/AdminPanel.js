import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const [form, setForm] = useState({ name:"", description:"", image:"", price:"" });

  const add = () => {
    setProducts([...products, { ...form, id: products.length + 1 }]);
  };

  const remove = (id) =>
     {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container">
      <input className="form-control" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="form-control" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="form-control" onChange={e => setForm({ ...form, image: e.target.value })} />
      <input className="form-control" onChange={e => setForm({ ...form, price: e.target.value })} />

      <button onClick={add}>Add</button>

      {products.map(p => (
        <div key={p.id} className="row">
          <div className="col-6">
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </div>

          <button className="float-right" onClick={() => remove(p.id)}>Delete</button>
          <button className="float-right">Edit</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
