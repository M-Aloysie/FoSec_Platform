import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import AuthContext from "../context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function FarmerDashboard() {
  const { user } = useContext(AuthContext);

  const yieldData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Crop Yield (tons)",
        data: [2.5, 3.0, 2.8, 3.5],
        borderColor: "#2d6a4f",
        backgroundColor: "rgba(45, 106, 79, 0.2)",
        fill: true,
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [500, 600, 550, 700],
        backgroundColor: "#95d5b2",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Performance" },
    },
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Welcome, {user?.name || "Farmer"}
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Your farming dashboard.
      </motion.p>
      <div className="dashboard-grid">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Crop Yield</h3>
          <Line data={yieldData} options={chartOptions} />
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Revenue</h3>
          <Bar data={revenueData} options={chartOptions} />
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Quick Stats</h3>
          <p className="card-desc">Total Yield: 11.8 tons</p>
          <p className="card-desc">Total Revenue: $2,350</p>
          <p className="card-desc">Active Crops: 3</p>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3 className="card-title">Tasks</h3>
          <ul className="task-list">
            <li>Plant maize - Due 04/05</li>
            <li>Apply fertilizer - Due 04/07</li>
          </ul>
          <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>
            Add Task
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FarmerDashboard;