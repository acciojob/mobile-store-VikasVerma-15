import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 13", price: "70000", description: "Apple Phone", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Samsung S21", price: "65000", description: "Samsung Phone", image: "https://via.placeholder.com/150" },
    { id: 3, name: "OnePlus 9", price: "50000", description: "OnePlus Phone", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Pixel 6", price: "60000", description: "Google Phone", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Nokia X20", price: "40000", description: "Nokia Phone", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Vivo V25", price: "35000", description: "Vivo Phone", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Oppo Reno", price: "30000", description: "Oppo Phone", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Realme GT", price: "28000", description: "Realme Phone", image: "https://via.placeholder.com/150" }
  ]);

  return (
    <div id="main">
      {/* navigation (Cypress expects links here) */}
      <div className="row">
        <div className="col-12">
          <div><Link to="/">Home</Link></div>
        </div>
        <div className="col-12">
          <div><Link to="/admin">Admin Panel</Link></div>
        </div>
      </div>

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
