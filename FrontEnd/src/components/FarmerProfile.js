import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import AuthContext from "../context/AppContext";

function FarmerProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [farmSize, setFarmSize] = useState("10 acres");
  const [location, setLocation] = useState("Nairobi, Kenya");

  const handleSave = () => {
    setUser({ ...user, name });
    setEditMode(false);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Farmer Profile
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Manage your farming profile.
      </motion.p>
      <div className="profile-section">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Personal Info</h3>
          {editMode ? (
            <>
              <input className="auth-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <input className="auth-input" value={farmSize} onChange={(e) => setFarmSize(e.target.value)} placeholder="Farm Size" />
              <input className="auth-input" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
              <motion.button className="cta-button" onClick={handleSave} whileHover={{ backgroundColor: "#1b4332" }}>
                Save
              </motion.button>
            </>
          ) : (
            <>
              <p className="card-desc">Name: {name}</p>
              <p className="card-desc">Farm Size: {farmSize}</p>
              <p className="card-desc">Location: {location}</p>
              <motion.button className="cta-button" onClick={() => setEditMode(true)} whileHover={{ backgroundColor: "#1b4332" }}>
                Edit
              </motion.button>
            </>
          )}
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Stats</h3>
          <p className="card-desc">Crops Planted: 5</p>
          <p className="card-desc">Revenue: $1,200</p>
          <p className="card-desc">Feedback Submitted: 3</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FarmerProfile;