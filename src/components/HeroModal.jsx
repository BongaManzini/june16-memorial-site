// src/components/HeroModal.jsx
import React from "react";
import "./HeroModal.css";

export default function HeroModal({ hero, onClose }) {
  if (!hero) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{hero.name}</h2>
        {hero.image && <img src={hero.image} alt={hero.name} />}
        <p>{hero.description}</p>
      </div>
    </div>
  );
}
