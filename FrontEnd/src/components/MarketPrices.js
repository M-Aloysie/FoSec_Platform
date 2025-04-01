import React, { useState, useEffect } from "react";

function MarketPrices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/market-prices") // Replace with real API
      .then((res) => res.json())
      .then((data) => setPrices(data))
      .catch((err) => console.error("Error fetching prices:", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md my-5">
      <h2 className="text-lg font-bold">📈 Market Prices</h2>
      <ul>
        {prices.map((item, index) => (
          <li key={index} className="text-gray-600">{item.name}: ${item.price}/kg</li>
        ))}
      </ul>
    </div>
  );
}

export default MarketPrices;

