import React, { useState } from "react";
import { motion } from "framer-motion";

function FinancialTools() {
  const [showTooltip, setShowTooltip] = useState(null);

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Financial Tools
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Secure your farm with loans and insurance.
      </motion.p>
      <div className="card-grid">
        <motion.div className="card" whileHover={{ scale: 1.1 }} onHoverStart={() => setShowTooltip("loan")} onHoverEnd={() => setShowTooltip(null)}>
          <h3 className="card-title">Microloans</h3>
          <p className="card-desc">Up to $500 for your farm.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Apply Now</motion.button>
          {showTooltip === "loan" && <motion.div className="tooltip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Quick approval in 24 hours!</motion.div>}
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }} onHoverStart={() => setShowTooltip("insurance")} onHoverEnd={() => setShowTooltip(null)}>
          <h3 className="card-title">Crop Insurance</h3>
          <p className="card-desc">Protect against losses.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Get Quote</motion.button>
          {showTooltip === "insurance" && <motion.div className="tooltip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Covers drought & pests!</motion.div>}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FinancialTools;