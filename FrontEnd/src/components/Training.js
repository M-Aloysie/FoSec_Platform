import React, { useState } from "react";
import { motion } from "framer-motion";

function Training() {
  const [openModule, setOpenModule] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(null);
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    trainingDate: "",
    moduleTitle: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const modules = [
    {
      title: "Crop Rotation",
      desc: "Boost soil health with rotation techniques.",
      details: "Learn how to alternate crops to improve soil fertility and reduce pests.",
      prerequisites: "Basic farming knowledge",
    },
    {
      title: "Irrigation Tips",
      desc: "Maximize water efficiency.",
      details: "Master drip and sprinkler systems for sustainable water use.",
      prerequisites: "Access to irrigation equipment",
    },
    {
      title: "Pest Management",
      desc: "Control pests naturally.",
      details: "Explore organic pest control methods to protect your crops.",
      prerequisites: "None",
    },
    {
      title: "Soil Fertility",
      desc: "Enhance soil quality.",
      details: "Understand fertilizers and composting for better yields.",
      prerequisites: "Interest in soil science",
    },
  ];

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Training signup submitted: " + JSON.stringify(signupForm));
      setShowSignupForm(null);
      setSubmitted(false);
      setSignupForm({ name: "", email: "", trainingDate: "", moduleTitle: "" });
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const openSignupForm = (moduleTitle) => {
    setSignupForm((prev) => ({ ...prev, moduleTitle }));
    setShowSignupForm(moduleTitle);
  };

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
          <motion.div
            key={index}
            className="accordion-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.h3
              className="accordion-title"
              onClick={() => setOpenModule(openModule === index ? null : index)}
              whileHover={{ color: "#ffd60a", scale: 1.05 }}
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
              <p><strong>Details:</strong> {module.details}</p>
              <p><strong>Prerequisites:</strong> {module.prerequisites}</p>
              <motion.button
                className="cta-button"
                onClick={() => openSignupForm(module.title)}
                whileHover={{ backgroundColor: "#1b4332", scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
              <motion.button
                className="cta-button secondary"
                whileHover={{ backgroundColor: "#ffd60a", color: "#0d1b2a", scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Signup Form Modal */}
      {showSignupForm && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="modal-content">
            <h3>Sign Up for {showSignupForm}</h3>
            <form className="training-form" onSubmit={handleSignupSubmit}>
              <input
                type="text"
                name="name"
                value={signupForm.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="form-input"
                required
              />
              <input
                type="date"
                name="trainingDate"
                value={signupForm.trainingDate}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              <div className="form-buttons">
                <motion.button
                  type="submit"
                  className="cta-button"
                  whileHover={{ backgroundColor: "#1b4332" }}
                  disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Submit"}
                </motion.button>
                <motion.button
                  type="button"
                  className="cta-button cancel"
                  onClick={() => setShowSignupForm(null)}
                  whileHover={{ backgroundColor: "#d00000" }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
            {submitted && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Signing up...
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Training;