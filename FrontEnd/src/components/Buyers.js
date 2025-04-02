import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Buyers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const products = [
    { name: "Maize", desc: "Freshly harvested maize.", category: "grains", price: "$0.25/kg", img: "https://images.unsplash.com/photo-1602937598768-ffb996e4e639" },
    { name: "Cassava", desc: "High-quality cassava roots.", category: "tubers", price: "$0.30/kg", img: "https://images.unsplash.com/photo-1590779033106-b1ca0e043952" },
    { name: "Yam", desc: "Organic yam tubers.", category: "tubers", price: "$0.40/kg", img: "https://images.unsplash.com/photo-1500595046743-cd271d6942f3" },
    { name: "Rice", desc: "Premium long-grain rice.", category: "grains", price: "$0.50/kg", img: "https://images.unsplash.com/photo-1586201375761-52aa8003809b" },
  ];

  const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % filteredProducts.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  const handleContactFarmer = () => navigate("/farmers"); // Redirects to farmers list

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Buyers Marketplace
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Source fresh produce directly from farmers.
      </motion.p>

      {/* Featured Products Carousel */}
      <motion.div className="carousel-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
        <h2 className="section-title">Featured Products</h2>
        <div className="carousel">
          <motion.button className="carousel-btn" onClick={handlePrev} whileHover={{ scale: 1.2 }}>◄</motion.button>
          <motion.div className="card" key={activeIndex} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <img src={filteredProducts[activeIndex].img} alt={filteredProducts[activeIndex].name} className="card-img" />
            <h3 className="card-title">{filteredProducts[activeIndex].name}</h3>
            <p className="card-desc">{filteredProducts[activeIndex].desc}</p>
            <p className="card-price">{filteredProducts[activeIndex].price}</p>
            <motion.button className="cta-button" onClick={handleContactFarmer} whileHover={{ backgroundColor: "#1b4332" }}>
              Contact Farmer
            </motion.button>
          </motion.div>
          <motion.button className="carousel-btn" onClick={handleNext} whileHover={{ scale: 1.2 }}>►</motion.button>
        </div>
      </motion.div>

      {/* Product Catalog */}
      <motion.div className="catalog-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        <h2 className="section-title">Product Catalog</h2>
        <div className="filter-buttons">
          <motion.button className="toggle-btn" onClick={() => setFilter("all")} whileHover={{ scale: 1.1 }}>All</motion.button>
          <motion.button className="toggle-btn" onClick={() => setFilter("grains")} whileHover={{ scale: 1.1 }}>Grains</motion.button>
          <motion.button className="toggle-btn" onClick={() => setFilter("tubers")} whileHover={{ scale: 1.1 }}>Tubers</motion.button>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={product.img} alt={product.name} className="product-img" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <p className="product-price">{product.price}</p>
              <motion.button className="cta-button" onClick={handleContactFarmer} whileHover={{ backgroundColor: "#1b4332" }}>
                Contact Farmer
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div className="cta-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2 className="section-title">Ready to Buy?</h2>
        <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
          Join our marketplace and start sourcing today.
        </motion.p>
        <motion.button className="cta-button large" onClick={() => navigate("/signup")} whileHover={{ scale: 1.1, backgroundColor: "#1b4332" }}>
          Sign Up Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Buyers;