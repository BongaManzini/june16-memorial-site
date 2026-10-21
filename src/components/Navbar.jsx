// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h1 className="logo">June 16</h1>
      <ul>
        <li onClick={() => scrollTo("hero")}>Home</li>
        <li onClick={() => scrollTo("timeline")}>Timeline</li>
        <li onClick={() => scrollTo("gallery")}>Gallery</li>
        <li onClick={() => scrollTo("resources")}>Resources</li>
        <li onClick={() => scrollTo("about")}>About</li>
      </ul>
    </nav>
  );
}
