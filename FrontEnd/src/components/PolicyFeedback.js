import React, { useState } from "react";
import { motion } from "framer-motion";

function PolicyFeedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedback("");
    }, 2000);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Policy Feedback
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Shape agricultural policies with your voice.
      </motion.p>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <motion.textarea
          className="feedback-input"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          rows="5"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          whileFocus={{ borderColor: "#ffd60a" }}
        />
        <motion.button
          type="submit"
          className="cta-button"
          whileHover={{ scale: 1.1, backgroundColor: "#1b4332" }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Feedback
        </motion.button>
      </form>
      {submitted && (
        <motion.div className="success-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          Thank you for your feedback!
        </motion.div>
      )}
    </motion.div>
  );
}

export default PolicyFeedback;