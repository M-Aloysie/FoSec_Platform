import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import AuthContext from "../context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function FarmerProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [farmSize, setFarmSize] = useState("10 acres");
  const [location, setLocation] = useState("Nairobi, Kenya");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Plant maize", due: "04/05" },
    { id: 2, text: "Apply fertilizer", due: "04/07" },
  ]);
  const [newTask, setNewTask] = useState("");

  const yieldData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      { label: "Maize Yield (tons)", data: [2.5, 3.0, 2.8, 3.5], backgroundColor: "#2d6a4f" },
      { label: "Beans Yield (tons)", data: [1.8, 2.0, 1.9, 2.2], backgroundColor: "#95d5b2" },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      { label: "Revenue ($)", data: [500, 600, 550, 700], borderColor: "#2d6a4f", backgroundColor: "rgba(45, 106, 79, 0.2)", fill: true },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true } },
  };

  const handleSave = () => {
    setUser({ ...user, name });
    setEditMode(false);
  };

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, due: "TBD" }]);
      setNewTask("");
    }
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Farmer Dashboard - {name}
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Manage your farm and track your progress.
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
        </div>
      </motion.div>

      {/* Yield Chart */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        <h2 className="section-title">Crop Yield</h2>
        <div className="chart-container">
          <Bar data={{ ...yieldData, plugins: { title: { text: "Monthly Crop Yield" } } }} options={chartOptions} />
        </div>
      </motion.div>

      {/* Revenue Chart */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2 className="section-title">Revenue</h2>
        <div className="chart-container">
          <Line data={{ ...revenueData, plugins: { title: { text: "Monthly Revenue" } } }} options={chartOptions} />
        </div>
      </motion.div>

      {/* Tasks */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
        <h2 className="section-title">Tasks</h2>
        <div className="task-list">
          {tasks.map(task => (
            <motion.div key={task.id} className="task-item" whileHover={{ scale: 1.02 }}>
              <span>{task.text} - Due: {task.due}</span>
            </motion.div>
          ))}
          <div className="task-input">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task..."
              className="auth-input"
            />
            <motion.button className="cta-button" onClick={handleAddTask} whileHover={{ backgroundColor: "#1b4332" }}>
              Add
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <h2 className="section-title">Notifications</h2>
        <div className="notification-list">
          <motion.div className="notification-item" whileHover={{ scale: 1.02 }}>
            <span>Weather Alert: Heavy rain expected tomorrow.</span>
          </motion.div>
          <motion.div className="notification-item" whileHover={{ scale: 1.02 }}>
            <span>Market Update: Maize prices up by 5%.</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FarmerProfile;