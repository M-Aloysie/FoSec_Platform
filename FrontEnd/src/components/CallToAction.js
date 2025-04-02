import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <motion.div className="cta-wrapper" initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
      <Link to="/signup" className="cta-button" onClick={() => alert("Join the FoSec community!")}>
        Get Started
      </Link>
    </motion.div>
  );
}

export default CallToAction;