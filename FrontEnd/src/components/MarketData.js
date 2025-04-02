import React, { useState } from "react";
import { motion } from "framer-motion";

function MarketData() {
  const [view, setView] = useState("list"); // Toggle between list and grid
  const marketItems = [
    { name: "Maize", price: 0.25 },
    { name: "Cassava", price: 0.30 },
    { name: "Yam", price: 0.40 },
  ];

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Market Data
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Real-time pricing to optimize your sales.
      </motion.p>
      <motion.button className="toggle-btn" onClick={() => setView(view === "list" ? "grid" : "list")} whileHover={{ scale: 1.1 }}>
        Switch to {view === "list" ? "Grid" : "List"}
      </motion.button>
      <div className={`market-data-container ${view}`}>
        {marketItems.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="card-title">{item.name}</h3>
            <p className="card-desc">Price: ${item.price}/kg</p>
            <motion.span className="price-update" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              Live
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MarketData;