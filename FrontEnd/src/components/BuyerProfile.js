import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import AuthContext from "../context/AppContext";

function BuyerProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [business, setBusiness] = useState("Local Market Vendor");

  const handleSave = () => {
    setUser({ ...user, name });
    setEditMode(false);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Buyer Profile
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Manage your buyer account.
      </motion.p>
      <div className="profile-section">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Personal Info</h3>
          {editMode ? (
            <>
              <input className="auth-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <input className="auth-input" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Business" />
              <motion.button className="cta-button" onClick={handleSave} whileHover={{ backgroundColor: "#1b4332" }}>
                Save
              </motion.button>
            </>
          ) : (
            <>
              <p className="card-desc">Name: {name}</p>
              <p className="card-desc">Business: {business}</p>
              <motion.button className="cta-button" onClick={() => setEditMode(true)} whileHover={{ backgroundColor: "#1b4332" }}>
                Edit
              </motion.button>
            </>
          )}
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Purchase History</h3>
          <ul className="purchase-list">
            <li>Maize - $100 (03/25)</li>
            <li>Cassava - $150 (03/28)</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BuyerProfile;