import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));
  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
