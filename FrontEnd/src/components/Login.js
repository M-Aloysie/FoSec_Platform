import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import AuthContext from "../context/AppContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "Test User" });
    alert("Logged in successfully!");
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Login
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Access your FoSec Africa account.
      </motion.p>
      <form className="auth-form" onSubmit={handleLogin}>
        <motion.input
          type="email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileFocus={{ borderColor: "#ffd60a" }}
        />
        <motion.input
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileFocus={{ borderColor: "#ffd60a" }}
        />
        <motion.button
          type="submit"
          className="cta-button"
          whileHover={{ scale: 1.1, backgroundColor: "#1b4332" }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Login;