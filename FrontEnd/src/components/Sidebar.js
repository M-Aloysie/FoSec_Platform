import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { Home, Users, ShoppingCart, DollarSign, Book, MessageSquare, BarChart2, LogOut, LogIn, UserPlus } from "lucide-react";

function Sidebar({ isOpen, setIsOpen, user, logout }) {
  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <FiX />
        </button>
        <h2 className="sidebar-title">🌾 Menu</h2>
        <ul className="sidebar-links">
          <li><Link to="/" className="sidebar-item" onClick={() => setIsOpen(false)}><Home size={18} /> Home</Link></li>
          <li><Link to="/farmers" className="sidebar-item" onClick={() => setIsOpen(false)}><Users size={18} /> Farmers</Link></li>
          <li><Link to="/buyers" className="sidebar-item" onClick={() => setIsOpen(false)}><ShoppingCart size={18} /> Buyers</Link></li>
          <li><Link to="/market-data" className="sidebar-item market-data" onClick={() => setIsOpen(false)}><BarChart2 size={18} /> Market Data</Link></li>
          <li><Link to="/financial-tools" className="sidebar-item" onClick={() => setIsOpen(false)}><DollarSign size={18} /> Financial Tools</Link></li>
          <li><Link to="/training" className="sidebar-item" onClick={() => setIsOpen(false)}><Book size={18} /> Training</Link></li>
          <li><Link to="/policy-feedback" className="sidebar-item" onClick={() => setIsOpen(false)}><MessageSquare size={18} /> Policy Feedback</Link></li>
          {user ? (
            <li>
              <button className="sidebar-logout" onClick={logout}>
                <LogOut size={18} /> Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="sidebar-item" onClick={() => setIsOpen(false)}><LogIn size={18} /> Login</Link></li>
              <li><Link to="/signup" className="sidebar-item" onClick={() => setIsOpen(false)}><UserPlus size={18} /> Sign Up</Link></li>
            </>
          )}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;