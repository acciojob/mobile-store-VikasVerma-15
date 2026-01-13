import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const initialProducts = [
  { id: 1, name: "iPhone 12", price: 700 },
  { id: 2, name: "iPhone 13", price: 800 },
  { id: 3, name: "Samsung S21", price: 650 },
  { id: 4, name: "Samsung S22", price: 750 },
  { id: 5, name: "OnePlus 9", price: 600 },
  { id: 6, name: "OnePlus 10", price: 700 },
  { id: 7, name: "Pixel 6", price: 650 },
  { id: 8, name: "Pixel 7", price: 750 },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Routes>
      <Route path="/" element={<ProductList products={products} />} />
      <Route
        path="/admin"
        element={<AdminPanel products={products} setProducts={setProducts} />}
      />
      <Route
        path="/products/:id"
        element={<ProductDetails products={products} />}
      />
    </Routes>
  );
};

export default App;
