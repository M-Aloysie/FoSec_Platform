import React, { useState } from "react";
import { motion } from "framer-motion";

const productsData = [
  { id: 1, name: "Maize", price: "$15 per bag", farmer: "John Doe", image: "/images/maize.jpg" },
  { id: 2, name: "Coffee Beans", price: "$30 per kg", farmer: "Jane Uwimana", image: "/images/coffee.jpg" },
];

function Products() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-green-400 text-center">🌾 Available Products</h1>
      <p className="text-gray-300 text-center mt-2">Browse fresh farm products directly from farmers.</p>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-1/2 bg-gray-700 text-white rounded-lg placeholder-gray-400"
        />
      </div>

      {/* Products List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData
          .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-2xl font-semibold text-green-400 mt-4">{product.name}</h2>
              <p className="text-gray-400">{product.price}</p>
              <p className="text-gray-500">Sold by: {product.farmer}</p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Buy Now
              </button>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Products;
