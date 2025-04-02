import React, { useState } from "react";
import { motion } from "framer-motion";

function Training() {
  const [openModule, setOpenModule] = useState(null);

  const modules = [
    { title: "Crop Rotation", desc: "Boost soil health with rotation techniques." },
    { title: "Irrigation Tips", desc: "Maximize water efficiency." },
  ];

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Training Resources
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Master modern farming techniques.
      </motion.p>
      <div className="accordion">
        {modules.map((module, index) => (
          <motion.div key={index} className="accordion-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
            <motion.h3
              className="accordion-title"
              onClick={() => setOpenModule(openModule === index ? null : index)}
              whileHover={{ color: "#ffd60a" }}
            >
              {module.title}
            </motion.h3>
            <motion.div
              className="accordion-content"
              initial={{ height: 0 }}
              animate={{ height: openModule === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{module.desc}</p>
              <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Training;