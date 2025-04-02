import React, { useState } from "react";
import { motion } from "framer-motion";

function Farmers() {
  const [progress, setProgress] = useState(70);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const resources = [
    { name: "Fertilizer Guide", img: "https://images.unsplash.com/photo-1500595046743-cd271d6942f3" },
    { name: "Pest Control Tips", img: "https://images.unsplash.com/photo-1602937598768-ffb996e4e639" },
  ];

  const farmers = [
    {
      name: "John Mwangi",
      location: "Nairobi, Kenya",
      assets: { crops: ["Maize", "Beans"], livestock: ["Cows: 5", "Goats: 10"] },
      contact: "john.mwangi@example.com",
      img: "https://images.unsplash.com/photo-1500595046743-cd271d6942f3",
    },
    {
      name: "Andrew James",
      location: "Bamako, Mali",
      assets: { crops: ["Cotton", "Millet"], livestock: ["Sheep: 8"] },
      contact: "amina.diallo@example.com",
      img: "https://images.unsplash.com/photo-1590779033106-b1ca0e043952",
    },
    {
      name: "Amina Diana",
      location: "Bamako, Mali",
      assets: { crops: ["Cotton", "Millet"], livestock: ["Sheep: 8"] },
      contact: "amina.diallo@example.com",
      img: "https://images.unsplash.com/photo-1590779033106-b1ca0e043952",
    },
  ];

  const handleContact = (farmer) => {
    setSelectedFarmer(farmer);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Farmers Hub
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Empowering smallholder farmers with cutting-edge tools.
      </motion.p>
      <div className="card-grid">
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
          <img src="https://images.unsplash.com/photo-1590779033106-b1ca0e043952" alt="Market" className="card-img" />
          <h3 className="card-title">Market Access</h3>
          <p className="card-desc">Connect with buyers instantly.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Explore Markets</motion.button>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }}>
          <img src="/images/loan-icon.png" alt="Loan" className="card-img" />
          <h3 className="card-title">Financial Support</h3>
          <p className="card-desc">Secure loans and insurance.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Get Funding</motion.button>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }}>
          <img src="/images/loan-icon.png" alt="Loan" className="card-img" />
          <h3 className="card-title">Financial Support</h3>
          <p className="card-desc">Secure loans and insurance.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Get Funding</motion.button>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }}>
          <img src="/images/loan-icon.png" alt="Loan" className="card-img" />
          <h3 className="card-title">Financial Support</h3>
          <p className="card-desc">Secure loans and insurance.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Get Funding</motion.button>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
          <img src="/images/training-icon.png" alt="Training" className="card-img" />
          <h3 className="card-title">Training</h3>
          <p className="card-desc">Master modern techniques.</p>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Start Learning</motion.button>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <img src="https://images.unsplash.com/photo-1500595046743-cd271d6942f3" alt="Resources" className="card-img" />
          <h3 className="card-title">Resources</h3>
          <p className="card-desc">Access farming guides.</p>
          <motion.button className="cta-button" onClick={() => setShowModal(true)} whileHover={{ backgroundColor: "#1b4332" }}>
            View Resources
          </motion.button>
        </motion.div>
      </div>
      <motion.div className="progress-bar" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1 }}>
        <span>{progress}% of farmers supported</span>
      </motion.div>

      {/* Farmer Directory Section */}
      <motion.div className="farmer-directory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2 className="section-title">Meet Our Farmers</h2>
        <div className="farmer-grid">
          {farmers.map((farmer, index) => (
            <motion.div
              key={index}
              className="farmer-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={farmer.img} alt={farmer.name} className="farmer-img" />
              <h3 className="farmer-name">{farmer.name}</h3>
              <p className="farmer-location"><strong>Location:</strong> {farmer.location}</p>
              <p className="farmer-assets">
                <strong>Crops:</strong> {farmer.assets.crops.join(", ")}<br />
                <strong>Livestock:</strong> {farmer.assets.livestock.join(", ")}
              </p>
              <motion.button
                className="cta-button"
                onClick={() => handleContact(farmer)}
                whileHover={{ backgroundColor: "#1b4332" }}
              >
                Contact
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modals */}
      {showModal && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="modal-content">
            <h3>Farmer Resources</h3>
            <div className="gallery">
              {resources.map((resource, index) => (
                <motion.img
                  key={index}
                  src={resource.img}
                  alt={resource.name}
                  className="gallery-img"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(resource.img)}
                />
              ))}
            </div>
            <motion.button className="cta-button" onClick={() => setShowModal(false)} whileHover={{ backgroundColor: "#1b4332" }}>
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
      {selectedImage && (
        <motion.div className="image-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="full-img" />
        </motion.div>
      )}
      {selectedFarmer && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedFarmer(null)}>
          <div className="modal-content">
            <h3>Contact {selectedFarmer.name}</h3>
            <p><strong>Email:</strong> {selectedFarmer.contact}</p>
            <p><strong>Location:</strong> {selectedFarmer.location}</p>
            <motion.button className="cta-button" onClick={() => setSelectedFarmer(null)} whileHover={{ backgroundColor: "#1b4332" }}>
              Close
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Farmers;