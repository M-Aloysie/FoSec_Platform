import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Farmer",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-green-400 text-center">Create an Account</h2>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
          >
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
            <option value="Policymaker">Policymaker</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location (e.g., Rwanda - Kigali)"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-all p-3 rounded-lg text-white font-bold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
