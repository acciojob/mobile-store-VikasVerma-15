import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import './../styles/App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 14", price: 800, description: "Apple phone", image: "img1" },
    { id: 2, name: "Samsung S23", price: 750, description: "Samsung phone", image: "img2" },
    { id: 3, name: "Pixel 7", price: 700, description: "Google phone", image: "img3" },
    { id: 4, name: "OnePlus 11", price: 680, description: "OnePlus phone", image: "img4" },
    { id: 5, name: "Xiaomi 13", price: 620, description: "Xiaomi phone", image: "img5" },
    { id: 6, name: "Vivo X90", price: 600, description: "Vivo phone", image: "img6" },
    { id: 7, name: "Oppo Find X", price: 590, description: "Oppo phone", image: "img7" },
    { id: 8, name: "Realme GT", price: 560, description: "Realme phone", image: "img8" }
  ]);

  return (
    <div id="main">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
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