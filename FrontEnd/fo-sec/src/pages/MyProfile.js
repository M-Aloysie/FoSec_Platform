import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, MessageSquare, BarChart2, ShoppingCart, Users, LogOut, TrendingUp, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

function MyProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* ✅ Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 p-6 space-y-6 min-h-screen fixed">
        <h2 className="text-xl font-bold text-green-400 text-center">🌿 FoSec Dashboard</h2>
        <ul className="space-y-4">
          {[
            { tab: "overview", icon: <Home size={20} />, label: "Overview" },
            { tab: "messages", icon: <MessageSquare size={20} />, label: "Messages" },
            { tab: "market-data", icon: <BarChart2 size={20} />, label: "Market Data" },
            { tab: "requests", icon: <ShoppingCart size={20} />, label: "Buyer Requests" },
            { tab: "offers", icon: <TrendingUp size={20} />, label: "Offers" },
            { tab: "farmers", icon: <Users size={20} />, label: "Connect with Farmers" },
            { tab: "policymakers", icon: <FileText size={20} />, label: "Policymakers" },
          ].map((item) => (
            <li key={item.tab}>
              <button
                onClick={() => setActiveTab(item.tab)}
                className={`flex items-center space-x-2 p-2 w-full rounded ${
                  activeTab === item.tab ? "bg-green-600" : "hover:bg-gray-700"
                }`}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <Link to="/login" className="flex items-center space-x-2 text-red-500 hover:text-red-600 mt-6">
          <LogOut size={20} /> <span>Logout</span>
        </Link>
      </aside>

      {/* ✅ Main Content */}
      <main className="flex-1 p-8 ml-64">
        {activeTab === "overview" && <Overview />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "market-data" && <MarketData />}
        {activeTab === "requests" && <Requests />}
        {activeTab === "offers" && <Offers />}
        {activeTab === "farmers" && <ConnectWithFarmers />}
        {activeTab === "policymakers" && <Policymakers />}
      </main>
    </div>
  );
}

/* ✅ Overview Section */
function Overview() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-400">👤 Farmer Overview</h2>
      <p><strong>🌍 Location:</strong> Rwanda - Kigali</p>
      <p><strong>🌾 Crops:</strong> Maize, Beans, Tomatoes</p>
      <p><strong>⚠️ Challenges:</strong> Pests affecting maize crops.</p>
      <p><strong>🎉 Achievements:</strong> Increased maize yield by 30% this season!</p>
      <p><strong>🌟 Opportunities:</strong> Looking for buyers for bulk maize sales.</p>
    </div>
  );
}

/* ✅ Messages Section */
function Messages() {
  const [messages, setMessages] = useState([
    { sender: "Alice", content: "Do you sell organic maize?" },
    { sender: "Bob", content: "I'm looking for 500kg of tomatoes." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "You", content: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400">💬 Messages</h2>
      <div className="bg-gray-700 p-4 rounded-lg h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <p key={index} className={`p-2 rounded ${msg.sender === "You" ? "text-green-300" : "text-white"}`}>
            <strong>{msg.sender}:</strong> {msg.content}
          </p>
        ))}
      </div>
      <div className="mt-4 flex">
        <input 
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 rounded bg-gray-600 text-white"
        />
        <button onClick={sendMessage} className="ml-2 bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          Send
        </button>
      </div>
    </div>
  );
}

/* ✅ Market Data Section */
function MarketData() {
  const marketPrices = [
    { crop: "Maize", price: 1.2 },
    { crop: "Beans", price: 2.0 },
    { crop: "Tomatoes", price: 0.8 },
    { crop: "Wheat", price: 1.5 },
    { crop: "Rice", price: 2.3 },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400">📈 Market Data</h2>

      {/* ✅ Market Prices List */}
      <ul className="mt-4 space-y-2">
        {marketPrices.map((data, index) => (
          <li key={index} className="bg-gray-700 p-3 rounded flex justify-between">
            <span><strong>{data.crop}:</strong></span>
            <span>${data.price}/kg</span>
          </li>
        ))}
      </ul>

      {/* ✅ Market Trend Chart */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-green-400">📊 Price Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={marketPrices}>
            <XAxis dataKey="crop" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#4CAF50" name="Price ($/kg)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ✅ Buyer Requests Section */
function Requests() {
  const [requests, setRequests] = useState([
    { id: 1, crop: "Maize", status: "pending" },
    { id: 2, crop: "Tomatoes", status: "approved" },
    { id: 3, crop: "Beans", status: "pending" },
  ]);

  const handleApproval = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "approved" } : req));
  };

  const handleRejection = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-red-400">🛒 Buyer Requests</h2>
      <div className="mt-4 space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="bg-gray-700 p-4 rounded flex justify-between">
            <span><strong>{request.crop}:</strong> {request.status}</span>
            <div className="space-x-2">
              {request.status === "pending" ? (
                <>
                  <button onClick={() => handleApproval(request.id)} className="bg-green-500 px-3 py-2 rounded hover:bg-green-600">Approve</button>
                  <button onClick={() => handleRejection(request.id)} className="bg-red-500 px-3 py-2 rounded hover:bg-red-600">Reject</button>
                </>
              ) : (
                <span className="text-green-400">Approved</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ Offers Section */
function Offers() {
  const offers = [
    { id: 1, opportunity: "Bulk Maize Purchase", discount: "10% Off for 100kg+" },
    { id: 2, opportunity: "Free Delivery for Tomato Orders Above $50", discount: "Free Delivery" },
    { id: 3, opportunity: "Beans for Export - Special Price", discount: "Contact for Pricing" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-400">📢 Market Offers</h2>
      <div className="mt-4 space-y-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-gray-700 p-4 rounded flex justify-between">
            <span><strong>{offer.opportunity}</strong></span>
            <span className="text-yellow-400">{offer.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ✅ Connect with Farmers Section */
function ConnectWithFarmers() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400">🌱 Connect with Farmers</h2>
      <p>Find and connect with local farmers in your area for collaboration and mutual growth.</p>
    </div>
  );
}

/* ✅ Policymakers Section */
function Policymakers() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400">📜 Policymakers</h2>
      <p>Stay updated with the latest government policies and regulations that affect your farming business.</p>
    </div>
  );
}

export default MyProfile;
