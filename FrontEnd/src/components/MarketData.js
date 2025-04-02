import React, { useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function MarketData() {
  const [view, setView] = useState("list"); // Toggle between list and grid
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc for price sorting

  const marketItems = [
    { name: "Maize", price: 0.25, category: "grains", trend: [0.20, 0.22, 0.25, 0.24, 0.25] },
    { name: "Cassava", price: 0.30, category: "tubers", trend: [0.28, 0.29, 0.30, 0.31, 0.30] },
    { name: "Yam", price: 0.40, category: "tubers", trend: [0.38, 0.39, 0.40, 0.41, 0.40] },
    { name: "Rice", price: 0.50, category: "grains", trend: [0.48, 0.49, 0.50, 0.51, 0.50] },
  ];

  const filteredItems = marketItems
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter(item => categoryFilter === "all" || item.category === categoryFilter)
    .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: filteredItems.map(item => ({
      label: `${item.name} Price ($/kg)`,
      data: item.trend,
      borderColor: item.category === "grains" ? "#2d6a4f" : "#95d5b2",
      backgroundColor: item.category === "grains" ? "rgba(45, 106, 79, 0.2)" : "rgba(149, 213, 178, 0.2)",
      fill: true,
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Market Price Trends (Last 5 Days)" },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Price ($/kg)" } },
      x: { title: { display: true, text: "Days" } },
    },
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Market Data
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Real-time pricing to optimize your sales.
      </motion.p>

      {/* Filters and Controls */}
      <motion.div className="controls" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        <div className="filter-buttons">
          <motion.button className="toggle-btn" onClick={() => setCategoryFilter("all")} whileHover={{ scale: 1.1 }}>All</motion.button>
          <motion.button className="toggle-btn" onClick={() => setCategoryFilter("grains")} whileHover={{ scale: 1.1 }}>Grains</motion.button>
          <motion.button className="toggle-btn" onClick={() => setCategoryFilter("tubers")} whileHover={{ scale: 1.1 }}>Tubers</motion.button>
        </div>
        <div className="sort-buttons">
          <motion.button className="toggle-btn" onClick={() => setSortOrder("asc")} whileHover={{ scale: 1.1 }}>Price: Low to High</motion.button>
          <motion.button className="toggle-btn" onClick={() => setSortOrder("desc")} whileHover={{ scale: 1.1 }}>Price: High to Low</motion.button>
          <motion.button className="toggle-btn" onClick={() => setView(view === "list" ? "grid" : "list")} whileHover={{ scale: 1.1 }}>
            Switch to {view === "list" ? "Grid" : "List"}
          </motion.button>
        </div>
      </motion.div>

      {/* Market Data Cards */}
      <motion.div className="market-data-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        <div className={`market-data-container ${view}`}>
          {filteredItems.map((item, index) => (
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
              <p className="card-category">Category: {item.category}</p>
              <motion.span className="price-update" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                Live
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Price Trend Chart */}
      <motion.div className="chart-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2 className="section-title">Price Trends</h2>
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MarketData;