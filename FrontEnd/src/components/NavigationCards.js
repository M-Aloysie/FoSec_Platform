import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavigationCards() {
  const [activeCard, setActiveCard] = useState(null);
  const cardVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    active: { scale: 1.05 }
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cards = [
    { to: "/farmers", text: "For Farmers" },
    { to: "/products", text: "Explore Products" },
    { to: "/buyers", text: "For Buyers" },
  ];

  return (
    <motion.div className="card-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
      {cards.map((btn, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={activeCard === index ? "active" : "animate"}
          whileHover="hover"
          whileTap="tap"
          className="card"
          onClick={() => handleCardClick(index)}
        >
          <Link to={btn.to} className="card-link">{btn.text}</Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default NavigationCards;