import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">🏋️ FitZone</div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="home" smooth duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="about" smooth duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="plans" smooth duration={500} onClick={() => setMenuOpen(false)}>Plans</Link></li>
        <li><Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>

        <li>
          <button
            className="btn-outline"
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
          >
            Login
          </button>
        </li>
        <li>
          <button
            className="btn-filled"
            onClick={() => {
              setMenuOpen(false);
              navigate("/register");
            }}
          >
            Sign Up
          </button>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
