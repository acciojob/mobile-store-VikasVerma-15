import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductDetails = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));
  const [price, setPrice] = useState(product.price);

  const saveProduct = () => {
    setProducts(
      products.map(p =>
        p.id === product.id ? { ...p, price } : p
      )
    );
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <input
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button className="float-right" onClick={saveProduct}>
        Save
      </button>

      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default ProductDetails;

