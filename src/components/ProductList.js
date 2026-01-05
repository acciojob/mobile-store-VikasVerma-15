import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>
            <div className="row">
              <div className="col-4">
                <img src={p.image} alt={p.name} width="100%" />
              </div>
              <div className="col-8">
                <h4>{p.name}</h4>
                <p>{p.price}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

