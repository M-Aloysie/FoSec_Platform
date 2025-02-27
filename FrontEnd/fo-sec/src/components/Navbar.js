import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import AuthContext from "../context/AppContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* ✅ Top Navbar */}
      <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg">
        <h1 className="text-2xl font-bold">🌿 FoSec</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setSidebarOpen(true)}>
          <FiMenu />
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/farmers" className="hover:underline">Farmers</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li><Link to="/buyers" className="hover:underline">Buyers</Link></li>
          <li><Link to="/policymakers" className="hover:underline">Policymakers</Link></li>
          {user ? (
            <li className="flex items-center space-x-4">
              <span className="font-semibold">👤 {user.name}</span>
              <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition" onClick={logout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* ✅ Sidebar (Mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 w-64 bg-green-800 text-white h-full p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform z-50`}
      >
        <button className="text-3xl absolute top-4 right-4" onClick={() => setSidebarOpen(false)}>
          <FiX />
        </button>
        <h2 className="text-xl font-bold mb-6">🌿 Menu</h2>
        <ul className="space-y-4 text-lg">
          <li><Link to="/" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/farmers" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Farmers</Link></li>
          <li><Link to="/products" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Products</Link></li>
          <li><Link to="/buyers" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Buyers</Link></li>
          <li><Link to="/policymakers" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Policymakers</Link></li>
          {user ? (
            <li>
              <button className="bg-red-500 px-4 py-2 rounded w-full mt-4 hover:bg-red-600 transition" onClick={logout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Login</Link></li>
              <li><Link to="/signup" className="block hover:text-gray-300" onClick={() => setSidebarOpen(false)}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
