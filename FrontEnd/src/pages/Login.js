import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate(); // ✅ For redirection
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/my-profile"); // ✅ Redirect to My Profile after clicking Login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-green-400 text-center">Log in to FoSec</h2>

        {/* Login Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Remember Me & Forgot Password */}
          <motion.div
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember Me
            </label>

            <Link to="/forgot-password" className="text-yellow-400 hover:underline">
              Forgot Password?
            </Link>
          </motion.div>

          {/* Login Button */}
          <motion.button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-all p-3 rounded-lg text-white font-bold shadow-lg transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Log In
          </motion.button>
        </form>

        {/* Sign-Up Link */}
        <motion.p
          className="text-center text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Login;
