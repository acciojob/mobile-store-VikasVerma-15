import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return null;

  return (
    <div className="row">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;

