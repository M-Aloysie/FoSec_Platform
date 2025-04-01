import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const marketTrends = [
  { month: "Jan", maize: 50, coffee: 90, beans: 60 },
  { month: "Feb", maize: 55, coffee: 95, beans: 65 },
  { month: "Mar", maize: 53, coffee: 92, beans: 63 },
  { month: "Apr", maize: 60, coffee: 100, beans: 70 },
  { month: "May", maize: 58, coffee: 98, beans: 68 },
];

const productPrices = [
  { id: 1, name: "Maize", price: "$50 per bag", lastUpdated: "Today" },
  { id: 2, name: "Coffee Beans", price: "$90 per kg", lastUpdated: "Today" },
  { id: 3, name: "Beans", price: "$60 per kg", lastUpdated: "Today" },
];

function MarketData() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-green-400 text-center">📈 Market Data</h1>
      <p className="text-gray-300 text-center mt-2">Get real-time market trends and product prices.</p>

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

      {/* Product Prices */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productPrices
          .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-green-400">{product.name}</h2>
              <p className="text-gray-400">{product.price}</p>
              <p className="text-gray-500">📅 Last Updated: {product.lastUpdated}</p>
            </div>
          ))}
      </div>

      {/* Market Trends Chart */}
      <h2 className="text-3xl font-bold text-yellow-400 text-center mt-12">📊 Price Trends</h2>
      <div className="mt-6 bg-gray-800 p-6 rounded-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={marketTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="maize" stroke="#82ca9d" name="Maize" />
            <Line type="monotone" dataKey="coffee" stroke="#8884d8" name="Coffee" />
            <Line type="monotone" dataKey="beans" stroke="#ffc658" name="Beans" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MarketData;
