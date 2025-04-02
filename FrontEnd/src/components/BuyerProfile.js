import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import AuthContext from "../context/AppContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function BuyerProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [business, setBusiness] = useState("Local Market Vendor");
  const [orders, setOrders] = useState([
    { id: 1, product: "Maize", quantity: "100 kg", status: "Pending" },
    { id: 2, product: "Cassava", quantity: "50 kg", status: "Shipped" },
  ]);

  const marketTrends = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      { label: "Maize Price ($/kg)", data: [0.25, 0.26, 0.25, 0.27], borderColor: "#2d6a4f", backgroundColor: "rgba(45, 106, 79, 0.2)", fill: true },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Market Price Trends" } },
  };

  const handleSave = () => {
    setUser({ ...user, name });
    setEditMode(false);
  };

  return (
    <motion.div className="page-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <motion.h1 className="page-title" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        Buyer Dashboard - {name}
      </motion.h1>
      <motion.p className="page-subtitle" whileHover={{ scale: 1.05 }}>
        Manage your purchases and market insights.
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
        </div>
      </motion.div>

      {/* Market Trends Chart */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        <h2 className="section-title">Market Trends</h2>
        <div className="chart-container">
          <Line data={marketTrends} options={chartOptions} />
        </div>
      </motion.div>

      {/* Purchase History */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2 className="section-title">Purchase History</h2>
        <div className="order-list">
          {orders.map(order => (
            <motion.div key={order.id} className="order-item" whileHover={{ scale: 1.02 }}>
              <span>{order.product} - {order.quantity} - Status: {order.status}</span>
              <motion.button className="cta-button small" whileHover={{ backgroundColor: "#1b4332" }}>
                Track
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Order Actions */}
      <motion.div className="dashboard-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
        <h2 className="section-title">Order Actions</h2>
        <div className="action-grid">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3 className="card-title">New Order</h3>
            <p className="card-desc">Place a new purchase order.</p>
            <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Order Now</motion.button>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3 className="card-title">View Farmers</h3>
            <p className="card-desc">Explore available farmers.</p>
            <motion.button className="cta-button" whileHover={{ backgroundColor: "#1b4332" }}>Browse</motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BuyerProfile;