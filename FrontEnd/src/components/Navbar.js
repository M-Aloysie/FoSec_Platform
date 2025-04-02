import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import AuthContext from "../context/AppContext";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">🌿 FoSec</Link>
        <NavLinks user={user} logout={logout} />
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          <FiMenu />
        </button>
      </nav>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} user={user} logout={logout} />
    </>
  );
}

export default Navbar;