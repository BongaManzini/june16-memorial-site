// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner">
        <div className="logo-group" onClick={() => scrollTo("hero")}>
          <span className="logo-icon">✊</span>
          <div className="logo-text">
            <span className="logo-title">June 16, 1976</span>
            <span className="logo-subtitle">Soweto Youth Memorial</span>
          </div>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <li onClick={() => scrollTo("hero")}>Home</li>
          <li onClick={() => scrollTo("context")}>Causes & Route</li>
          <li onClick={() => scrollTo("timeline")}>Timeline & Slideshows</li>
          <li onClick={() => scrollTo("heroes")}>Student Heroes</li>
          <li onClick={() => scrollTo("resources")}>Books & News</li>
          <li onClick={() => scrollTo("gallery")}>Photo Archive</li>
          <li onClick={() => scrollTo("about")}>About</li>
        </ul>
      </div>
    </nav>
  );
}
