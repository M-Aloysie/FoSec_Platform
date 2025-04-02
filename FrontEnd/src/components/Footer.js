import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 FoSec. All rights reserved. | <Link to="/contact" className="footer-link">Contact Us</Link></p>
    </footer>
  );
}

export default Footer;