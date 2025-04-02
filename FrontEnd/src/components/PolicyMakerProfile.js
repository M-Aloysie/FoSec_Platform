import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import AuthContext from "../context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function PolicymakerProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [organization, setOrganization] = useState("Ministry of Agriculture");

  const impactData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      { label: "Farmers Reached", data: [500, 800, 1200, 1500], backgroundColor: "#2d6a4f" },
      { label: "Policies Implemented", data: [1, 2, 1, 2], backgroundColor: "#95d5b2" },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Policy Impact" } },
  };

  const handleSave = () => {
    setUser({ ...user, name });
    setEditMode(false);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Policymaker Dashboard - {name}
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Shape agricultural policies effectively.
      </motion.p>

      {/* Profile Info */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
        <h2 className="section-title">Profile</h2>
        <div className="profile-grid">
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
        </div>
      </motion.div>

      {/* Policy Impact Chart */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        <h2 className="section-title">Policy Impact</h2>
        <div className="chart-container">
          <Bar data={impactData} options={chartOptions} />
        </div>
      </motion.div>

      {/* Feedback Stats */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2 className="section-title">Feedback Stats</h2>
        <div className="stats-grid">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3 className="card-title">Total Feedback</h3>
            <p className="card-desc">Received: 45</p>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3 className="card-title">Action Taken</h3>
            <p className="card-desc">Implemented: 12</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Policy Actions */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
        <h2 className="section-title">Policy Actions</h2>
        <div className="action-grid">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3 className="card-title">Draft Policy</h3>
            <p className="card-desc">Create new agricultural policies.</p>
            <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Draft</motion.button>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3 className="card-title">Review Feedback</h3>
            <p className="card-desc">See farmer input.</p>
            <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Review</motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PolicymakerProfile;