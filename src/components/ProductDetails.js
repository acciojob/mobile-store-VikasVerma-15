import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));
  const [price, setPrice] = useState(product.price);

  const save = () => {
    setProducts(products.map(p =>
      p.id === product.id ? { ...p, price } : p
    ));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <input
        className="form-control"
        value={price}
        onChange={e => 
          setPrice(e.target.value)}
      />

      <button className="float-right" onClick={save}>Save</button>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;

