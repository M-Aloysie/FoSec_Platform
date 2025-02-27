import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState(["Maize", "Rice"]);
  const [newProduct, setNewProduct] = useState("");

  const addProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-blue-700">🛒 Products</h2>
      <ul className="mt-4">
        {products.map((product, index) => (
          <li key={index} className="border-b py-2">{product}</li>
        ))}
      </ul>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Add a product"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          className="border px-4 py-2 rounded mr-2"
        />
        <button onClick={addProduct} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Products;
