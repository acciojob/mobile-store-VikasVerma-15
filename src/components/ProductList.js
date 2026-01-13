import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Online Mobile Store</h1>

      {/* Admin link — Cypress expects 2nd child > a */}
      <div className="col-12">
        <div>
          <a href="/admin">Admin</a>
        </div>
      </div>

      {products.map((product) => (
        <div key={product.id} className="col-12">
          <div className="row">
            <div className="col-8">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
            <div className="col-4">
              <button
                className="btn"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
