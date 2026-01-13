import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1>Online Mobile Store</h1>

      {/* Admin link - Cypress expects 2nd child > a */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </div>

      {products.map((product) => (
        <div key={product.id}>
          {/* Product link - Cypress expects a[href="/products/1"] */}
          <Link to={`/products/${product.id}`}>
            <div className="row">
              <div className="col-8">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
              <div className="col-4">
                <button className="btn">View</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
