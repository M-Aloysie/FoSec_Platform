import React, { useState } from "react";
import { motion } from "framer-motion";

function Buyers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = [
    { name: "Maize", desc: "Freshly harvested maize." },
    { name: "Cassava", desc: "High-quality cassava roots." },
    { name: "Yam", desc: "Organic yam tubers." },
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Buyers Marketplace
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Source fresh produce directly from farmers.
      </motion.p>
      <div className="carousel">
        <motion.button className="carousel-btn" onClick={handlePrev} whileHover={{ scale: 1.2 }}>◄</motion.button>
        <motion.div className="card" key={activeIndex} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h3 className="card-title">{products[activeIndex].name}</h3>
          <p className="card-desc">{products[activeIndex].desc}</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Contact Farmer</motion.button>
        </motion.div>
        <motion.button className="carousel-btn" onClick={handleNext} whileHover={{ scale: 1.2 }}>►</motion.button>
      </div>
    </motion.div>
  );
}

export default Buyers;