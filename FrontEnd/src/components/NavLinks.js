import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, ShoppingCart, DollarSign, Book, MessageSquare, BarChart2, LogOut, LogIn, UserPlus } from "lucide-react";

function NavLinks({ user, logout }) {
  return (
    <ul className="nav-links">
      <li><Link to="/" className="nav-item"><Home size={18} /> Home</Link></li>
      <li><Link to="/farmers" className="nav-item"><Users size={18} /> Farmers</Link></li>
      <li><Link to="/buyers" className="nav-item"><ShoppingCart size={18} /> Buyers</Link></li>
      <li><Link to="/market-data" className="nav-item market-data"><BarChart2 size={18} /> Market Data</Link></li>
      <li><Link to="/financial-tools" className="nav-item"><DollarSign size={18} /> Financial Tools</Link></li>
      <li><Link to="/training" className="nav-item"><Book size={18} /> Training</Link></li>
      <li><Link to="/policy-feedback" className="nav-item"><MessageSquare size={18} /> Policy Feedback</Link></li>
      {user ? (
        <li className="user-section">
          <span className="user-name">👤 {user.name}</span>
          <button onClick={logout} className="logout-btn">
            <LogOut size={18} /> Logout
          </button>
        </li>
      ) : (
        <>
          <li><Link to="/login" className="nav-item"><LogIn size={18} /> Login</Link></li>
          <li><Link to="/signup" className="nav-item"><UserPlus size={18} /> Sign Up</Link></li>
        </>
      )}
    </ul>
  );
}

export default NavLinks;