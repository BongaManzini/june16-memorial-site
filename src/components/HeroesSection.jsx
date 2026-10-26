// src/components/HeroesSection.jsx
import React, { useState } from "react";
import "./HeroesSection.css";
import { heroes } from "../data/heroesData";

export default function HeroesSection() {
  const [selectedHero, setSelectedHero] = useState(null);

  return (
    <section id="heroes" className="heroes-section">
      <div className="heroes-container">
        <div className="heroes-header">
          <span className="heroes-kicker">THE VANGUARD OF 1976</span>
          <h2 className="heroes-title">Key Figures & Student Heroes</h2>
          <p className="heroes-subtitle">
            Meet the young leaders, fallen martyrs, and courageous journalists whose sacrifice, leadership, and unyielding dignity sparked South Africa's road to freedom.
          </p>
        </div>

        <div className="heroes-grid">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="hero-person-card"
              onClick={() => setSelectedHero(hero)}
            >
              <div className="hero-img-wrap">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="hero-portrait"
                  loading="lazy"
                />
                <span className="hero-age-pill">{hero.age}</span>
              </div>

              <div className="hero-info-area">
                <h3 className="hero-person-name">{hero.name}</h3>
                <span className="hero-person-role">{hero.role}</span>
                <span className="hero-person-school">🏫 {hero.school}</span>
                <p className="hero-person-bio-snippet">{hero.biography.slice(0, 160)}...</p>

                {hero.quote && (
                  <div className="hero-card-quote">
                    {hero.quote}
                  </div>
                )}

                <button
                  type="button"
                  className="hero-view-profile-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedHero(hero);
                  }}
                >
                  Read Full Biography & Fate →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Hero Modal */}
        {selectedHero && (
          <div className="hero-modal-overlay" onClick={() => setSelectedHero(null)}>
            <div
              className="hero-modal-box"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="hero-modal-close-btn"
                onClick={() => setSelectedHero(null)}
              >
                &times;
              </button>

              <div className="hero-modal-layout">
                <div className="hero-modal-image-col">
                  <img
                    src={selectedHero.image}
                    alt={selectedHero.name}
                    className="hero-modal-image"
                  />
                  <span className="hero-modal-age-tag">{selectedHero.age}</span>
                  <div className="hero-modal-school-tag">
                    <strong>Institution:</strong> {selectedHero.school}
                  </div>
                </div>

                <div className="hero-modal-text-col">
                  <span className="hero-modal-role-badge">{selectedHero.role}</span>
                  <h2 className="hero-modal-name">{selectedHero.name}</h2>

                  {selectedHero.quote && (
                    <blockquote className="hero-modal-quote">
                      {selectedHero.quote}
                    </blockquote>
                  )}

                  <div className="hero-modal-bio-block">
                    <h4>Historical Biography</h4>
                    <p>{selectedHero.biography}</p>
                  </div>

                  <div className="hero-modal-fate-block">
                    <h4>Historical Fate & Memory</h4>
                    <p>{selectedHero.fate}</p>
                  </div>

                  {selectedHero.keyFacts && selectedHero.keyFacts.length > 0 && (
                    <div className="hero-modal-facts-block">
                      <h4>Key Historical Facts</h4>
                      <ul>
                        {selectedHero.keyFacts.map((fact, idx) => (
                          <li key={idx}>{fact}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="hero-modal-actions">
                <button
                  className="hero-modal-dismiss-btn"
                  onClick={() => setSelectedHero(null)}
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
