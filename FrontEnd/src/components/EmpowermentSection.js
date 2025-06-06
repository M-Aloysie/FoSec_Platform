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
    { title: "Microloans", desc: "Funding for your farm.", link: "/loan"}, 
    { title: "Insurance", desc: "Secure your crops."}, 
    { title: "Training", desc: "Modern techniques."}, 
    { title: "Feedback", desc: "Shape policies."},
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