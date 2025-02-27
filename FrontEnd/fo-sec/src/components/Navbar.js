import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Home, Users, ShoppingCart, Store, Newspaper, BarChart2, LogOut, LogIn, UserPlus } from "lucide-react";
import AuthContext from "../context/AppContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* ✅ Full-width Navbar, aligned with Home Page */}
      <nav className="bg-green-700 text-white px-6 py-3 flex items-center justify-between fixed top-0 left-0 w-full max-w-screen-xl mx-auto z-50 shadow-md">
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold">🌿 FoSec</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-base">
          <li><Link to="/" className="hover:underline flex items-center"><Home size={18} className="mr-1" /> Home</Link></li>
          <li><Link to="/farmers" className="hover:underline flex items-center"><Users size={18} className="mr-1" /> Farmers</Link></li>
          <li><Link to="/products" className="hover:underline flex items-center"><Store size={18} className="mr-1" /> Products</Link></li>
          <li><Link to="/buyers" className="hover:underline flex items-center"><ShoppingCart size={18} className="mr-1" /> Buyers</Link></li>
          <li><Link to="/policymakers" className="hover:underline flex items-center"><Newspaper size={18} className="mr-1" /> Policymakers</Link></li>
          <li><Link to="/market-data" className="hover:underline text-yellow-300 font-semibold flex items-center">
            <BarChart2 size={18} className="mr-1" /> 📈 Market Data
          </Link></li>
          {user ? (
            <li className="flex items-center space-x-3">
              <span className="font-semibold hidden lg:block">👤 {user.name}</span>
              <button 
                onClick={logout} 
                className="bg-red-500 px-3 py-1.5 rounded hover:bg-red-600 transition flex items-center text-sm"
              >
                <LogOut size={18} className="mr-1" /> Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="hover:underline flex items-center"><LogIn size={18} className="mr-1" /> Login</Link></li>
              <li><Link to="/signup" className="hover:underline flex items-center"><UserPlus size={18} className="mr-1" /> Sign Up</Link></li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none hover:text-yellow-300 transition ml-auto"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* ✅ Sidebar (Mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 w-64 bg-green-800 text-white h-full p-5 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button 
          className="text-2xl absolute top-3 right-3 focus:outline-none hover:text-red-400 transition"
          onClick={() => setSidebarOpen(false)}
        >
          <FiX />
        </button>
        <h2 className="text-lg font-bold mb-5">🌿 Menu</h2>
        <ul className="space-y-3 text-base">
          <li><Link to="/" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
            <Home size={18} className="mr-2" /> Home
          </Link></li>
          <li><Link to="/farmers" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
            <Users size={18} className="mr-2" /> Farmers
          </Link></li>
          <li><Link to="/products" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
            <Store size={18} className="mr-2" /> Products
          </Link></li>
          <li><Link to="/buyers" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
            <ShoppingCart size={18} className="mr-2" /> Buyers
          </Link></li>
          <li><Link to="/policymakers" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
            <Newspaper size={18} className="mr-2" /> Policymakers
          </Link></li>
          <li><Link to="/market-data" className="block hover:text-yellow-300 font-semibold flex items-center" onClick={() => setSidebarOpen(false)}>
            <BarChart2 size={18} className="mr-2" /> 📈 Market Data
          </Link></li>
          {user ? (
            <li>
              <button 
                className="bg-red-500 px-3 py-1.5 rounded w-full mt-3 hover:bg-red-600 transition flex items-center text-sm"
                onClick={logout} 
              >
                <LogOut size={18} className="mr-2" /> Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
                <LogIn size={18} className="mr-2" /> Login
              </Link></li>
              <li><Link to="/signup" className="block hover:text-gray-300 flex items-center" onClick={() => setSidebarOpen(false)}>
                <UserPlus size={18} className="mr-2" /> Sign Up
              </Link></li>
            </>
          )}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
