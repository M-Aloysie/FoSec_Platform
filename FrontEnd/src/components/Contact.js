import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMessage("");
    }, 2000);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Contact Us
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Get in touch with the FoSec Africa team.
      </motion.p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <motion.textarea
          className="contact-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
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
          Send Message
        </motion.button>
      </form>
      {sent && (
        <motion.div className="success-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          Message sent successfully!
        </motion.div>
      )}
    </motion.div>
  );
}

export default Contact;