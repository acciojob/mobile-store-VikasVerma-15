import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import "../styles/App.css";
const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 12", price: 700, description: "Apple phone", image: "img" },
    { id: 2, name: "Samsung S21", price: 650, description: "Samsung phone", image: "img" },
    { id: 3, name: "OnePlus 9", price: 600, description: "OnePlus phone", image: "img" },
    { id: 4, name: "Pixel 6", price: 620, description: "Google phone", image: "img" },
    { id: 5, name: "Moto G", price: 300, description: "Motorola phone", image: "img" },
    { id: 6, name: "Nokia 8", price: 350, description: "Nokia phone", image: "img" },
    { id: 7, name: "Realme X", price: 280, description: "Realme phone", image: "img" },
    { id: 8, name: "Redmi Note", price: 250, description: "Redmi phone", image: "img" }
  ]);

  return (
    <div id="main">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin Panel</Link>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} setProducts={setProducts} />}
        />
        <Route
          path="/admin"
          element={<AdminPanel products={products} setProducts={setProducts} />}
        />
      </Routes>
    </div>
  );
};

export default App;
