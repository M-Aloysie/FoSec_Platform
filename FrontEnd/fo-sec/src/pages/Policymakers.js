import React, { useState } from "react";
import { motion } from "framer-motion";

const policiesData = [
  { id: 1, title: "New Farming Grants", description: "Government is offering subsidies for maize farmers." },
  { id: 2, title: "Export Regulations", description: "Updated export policies for agricultural products." },
];

function Policymakers() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-green-400 text-center">📜 Policy Updates</h1>
      <p className="text-gray-300 text-center mt-2">Stay updated with the latest agriculture policies.</p>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search policies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-1/2 bg-gray-700 text-white rounded-lg placeholder-gray-400"
        />
      </div>

      {/* Policies List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {policiesData
          .filter((policy) => policy.title.toLowerCase().includes(search.toLowerCase()))
          .map((policy) => (
            <motion.div
              key={policy.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-green-400">{policy.title}</h2>
              <p className="text-gray-400">{policy.description}</p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Read More
              </button>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Policymakers;
