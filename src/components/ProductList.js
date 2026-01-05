import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products.map((p) =>
       (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>
            <div className="row">
              <div className="col-12">{p.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
