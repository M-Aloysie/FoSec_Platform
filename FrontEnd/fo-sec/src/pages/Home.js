import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-10">
      <h1 className="text-4xl font-bold text-green-700">🌿 Welcome to FoSec</h1>
      <p className="text-lg text-gray-600 mt-2">
        Connecting farmers, buyers, and policymakers for a secure food system.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <Link to="/farmers" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          View Farmers
        </Link>
        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Explore Products
        </Link>
        <Link to="/buyers" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
          Find Buyers
        </Link>
        <Link to="/policymakers" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Policy Updates
        </Link>
      </div>
    </div>
  );
}

export default Home;
