import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function EmpowermentSection() {
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

  const items = [
    { title: "Microloans", desc: "Funding for your farm.", img: "/images/loan-icon.png" },
    { title: "Insurance", desc: "Secure your crops.", img: "/images/shield-icon.png" },
    { title: "Training", desc: "Modern techniques.", img: "/images/book-icon.png" },
    { title: "Feedback", desc: "Shape policies.", img: "/images/feedback-icon.png", link: "/feedback" },
  ];

  return (
    <motion.div className="empowerment-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}>
      <h2 className="section-title">Farmer Empowerment</h2>
      <div className="empowerment-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={activeCard === index ? "active" : "animate"}
            whileHover="hover"
            whileTap="tap"
            className="empowerment-card"
            onClick={() => handleCardClick(index)}
          >
            <motion.img src={item.img} alt={`${item.title} Icon`} className="card-icon" whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.4 }} />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
            {item.link && <Link to={item.link} className="card-link">Learn More</Link>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default EmpowermentSection;