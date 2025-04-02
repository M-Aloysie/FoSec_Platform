import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import AuthContext from "../context/AppContext";

function PolicymakerProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [organization, setOrganization] = useState("Ministry of Agriculture");

  const handleSave = () => {
    setUser({ ...user, name });
    setEditMode(false);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Policymaker Profile
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Influence agricultural policies effectively.
      </motion.p>
      <div className="profile-section">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Personal Info</h3>
          {editMode ? (
            <>
              <input className="auth-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <input className="auth-input" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Organization" />
              <motion.button className="cta-button" onClick={handleSave} whileHover={{ backgroundColor: "#1b4332" }}>
                Save
              </motion.button>
            </>
          ) : (
            <>
              <p className="card-desc">Name: {name}</p>
              <p className="card-desc">Organization: {organization}</p>
              <motion.button className="cta-button" onClick={() => setEditMode(true)} whileHover={{ backgroundColor: "#1b4332" }}>
                Edit
              </motion.button>
            </>
          )}
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Policy Impact</h3>
          <p className="card-desc">Policies Influenced: 2</p>
          <p className="card-desc">Farmers Reached: 1,500</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PolicymakerProfile;