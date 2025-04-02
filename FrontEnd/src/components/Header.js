import React from "react";
import { motion } from "framer-motion";

function Header({ title = "FoSec Africa", subtitle = "Welcome to FoSec Africa", stats = [] }) {
  return (
    <motion.div 
      className="header-section" 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <div className="header-bg">
        <img src="/images/leaf.jpg" alt="Green Leaf Background" className="header-bg-img" />
      </div>
      <h1 className="main-title">{title}</h1>
      <motion.p 
        className="subtitle" 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        className="stats" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 1 }}
      >
        {Array.isArray(stats) && stats.length > 0 ? (
          stats.map((stat, index) => (
            <span key={index} className="stat-item">{stat}</span>
          ))
        ) : (
          <span className="stat-item">No stats available</span>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Header;