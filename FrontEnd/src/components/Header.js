import React from "react";
import { motion } from "framer-motion";

function Header({ title, subtitle, stats }) {
  return (
    <motion.div className="header-section" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
      <img src="/images/leaf-icon.png" alt="Leaf Icon" className="header-icon" onClick={() => alert("Transforming agriculture for a food-secure future!")} />
      <h1 className="main-title">{title}</h1>
      <motion.p className="subtitle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        {subtitle}
      </motion.p>
      <motion.div className="stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        {stats.map((stat, index) => (
          <span key={index} className="stat-item">{stat}</span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Header;