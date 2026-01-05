import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

      {products.map((product) => (
        <div key={product.id}>
          {/* Cypress: :nth-child(x) > a */}
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>

          <button
            className="btn"
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
