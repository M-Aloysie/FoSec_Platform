import React from "react";

function Buyers() {
  const buyers = ["Supermarket A", "Market Vendor B"];

  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-yellow-700">🤝 Buyers</h2>
      <ul className="mt-4">
        {buyers.map((buyer, index) => (
          <li key={index} className="border-b py-2">{buyer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Buyers;
