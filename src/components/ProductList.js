import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="col-12" key={product.id}>
          <div>
            <Link to={`/products/${product.id}`}>
              <div className="row">
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
