import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: `url('/images/farmer-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
        }}
      ></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-4xl space-y-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold text-green-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          🌿 Welcome to FoSec
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Bridging the gap between farmers, buyers, and policymakers for a sustainable food system.
        </motion.p>

        {/* Call to Action */}
        <motion.p
          className="text-yellow-400 font-semibold text-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
        >
          Empowering Agriculture. Strengthening Communities. Ensuring Food Security.
        </motion.p>

        {/* Navigation Links */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[
            { to: "/farmers", text: "Meet Farmers", bg: "bg-green-500", hover: "hover:bg-green-600" },
            { to: "/products", text: "Discover Products", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
            { to: "/buyers", text: "Connect with Buyers", bg: "bg-yellow-500", hover: "hover:bg-yellow-600" },
          ].map((btn, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: index * 0.2 }} // Delayed effect for smoother feel
            >
              <Link
                to={btn.to}
                className={`${btn.bg} text-white px-8 py-4 rounded-lg transition-all duration-300 ${btn.hover} shadow-md`}
              >
                {btn.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Sign-Up Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="/Signup"
            className="bg-green-600 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-green-700"
          >
            Sign Up Now
          </Link>
        </motion.div>

        {/* Goals & Vision */}
        <motion.div
          className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h2
            className="text-3xl font-semibold text-green-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            🌍 Our Vision
          </motion.h2>
          <p className="text-gray-300">
            A world where every farmer thrives, markets are accessible, and food security is a reality for all.
          </p>

          <motion.h2
            className="text-3xl font-semibold text-yellow-400"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            🎯 Our Goals
          </motion.h2>
          <ul className="space-y-2 text-gray-300">
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              ✔️ Empower farmers with digital tools and market access.
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              ✔️ Foster connections between buyers and local producers.
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              ✔️ Provide real-time policy updates for better decision-making.
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-gray-800 text-white text-center py-4 mt-12">
        <p>
          © 2025 FoSec. All rights reserved. |{" "}
          <Link to="/contact" className="text-yellow-400 hover:underline">
            Contact Us
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Home;
