import React, { useState } from "react";
import { motion } from "framer-motion";

const buyersData = [
  { id: 1, name: "Kwizera Emmanuel", location: "Kenya - Nairobi", needs: "Looking for bulk maize suppliers" },
  { id: 2, name: "Amina Yusuf", location: "Tanzania - Arusha", needs: "Needs fresh organic coffee beans" },
];

function Buyers() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-green-400 text-center">🛒 Find Buyers</h1>
      <p className="text-gray-300 text-center mt-2">Connect with buyers looking for fresh produce.</p>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search buyers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-1/2 bg-gray-700 text-white rounded-lg placeholder-gray-400"
        />
      </div>

      {/* Buyers List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {buyersData
          .filter((buyer) => buyer.name.toLowerCase().includes(search.toLowerCase()))
          .map((buyer) => (
            <motion.div
              key={buyer.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-green-400">{buyer.name}</h2>
              <p className="text-gray-400">{buyer.location}</p>
              <p className="mt-2">{buyer.needs}</p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Contact Buyer
              </button>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Buyers;
