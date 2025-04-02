import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AppContext";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("farmer"); // Default role
  const [signedUp, setSignedUp] = useState(false);
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    signup(name, email, password, role);
    setSignedUp(true);
    setTimeout(() => {
      setSignedUp(false);
      navigate(`/${role}-profile`);
    }, 2000);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Sign Up
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Join the FoSec community.
      </motion.p>
      <form className="auth-form" onSubmit={handleSignup}>
        <motion.input
          type="text"
          className="auth-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileFocus={{ borderColor: "#ffd60a" }}
        />
        <motion.input
          type="email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileFocus={{ borderColor: "#ffd60a" }}
        />
        <motion.input
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileFocus={{ borderColor: "#ffd60a" }}
        />
        <motion.div className="role-selector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <label>Sign up as:</label>
          <div className="role-options">
            <motion.button
              type="button"
              className={`role-btn ${role === "farmer" ? "active" : ""}`}
              onClick={() => setRole("farmer")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Farmer
            </motion.button>
            <motion.button
              type="button"
              className={`role-btn ${role === "buyer" ? "active" : ""}`}
              onClick={() => setRole("buyer")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Buyer
            </motion.button>
            <motion.button
              type="button"
              className={`role-btn ${role === "policymaker" ? "active" : ""}`}
              onClick={() => setRole("policymaker")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Policymaker
            </motion.button>
          </div>
        </motion.div>
        <motion.button
          type="submit"
          className="cta-button"
          whileHover={{ scale: 1.1, backgroundColor: "#1b4332" }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </form>
      {signedUp && (
        <motion.div className="success-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          Welcome to FoSec Africa, {name}! Redirecting to your profile...
        </motion.div>
      )}
    </motion.div>
  );
}

export default Signup;