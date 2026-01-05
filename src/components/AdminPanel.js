import React from "react";

const AdminPanel = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      {products.map((product) => (
        <div className="col-12" key={product.id}>
          <div>
            <a href="#">
              <div className="row">
                <span>{product.name}</span>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
