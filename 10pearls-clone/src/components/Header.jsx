import { useState } from "react";
import "./Header.css";
import logo from "./logo.svg"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <img src={logo} alt="10Pearls" />
      </a>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        -_
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Company</a>
        <a href="#">Services</a>
        <a href="#">Platforms</a>
        <a href="#">Industries</a>
        <a href="#">Insights</a>
        <a href="#">Careers</a>
        <button style={{ borderRadius: "none" }}> Contact </button>
      </div>
    </nav>
  );
};

export default Header;