import React from "react";
import "./HeroSection.css"; // We'll create this for styling

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>June 16, 1976: The Soweto Uprising</h1>
          <p className="hero-tagline">
            The day South African youth changed history in the struggle against apartheid
          </p>
          
          <div className="hero-highlights">
            <div className="hero-card">
              <h3>20,000+ Students</h3>
              <p>Marched against forced Afrikaans education</p>
            </div>
            <div className="hero-card">
              <h3>600+ Lives Lost</h3>
              <p>Most under age 23, including 12-year-old Hector Pieterson</p>
            </div>
            <div className="hero-card">
              <h3>Global Impact</h3>
              <p>Sparked international anti-apartheid movements</p>
            </div>
          </div>

          <div className="hero-quote">
            <blockquote>
              "These students were not just fighting against language - they were fighting for their dignity."
            </blockquote>
            <p>- Antoinette Sithole, Hector Pieterson's sister</p>
          </div>

          <button className="hero-button">
            Learn Their Story ↓
          </button>
        </div>
      </div>
    </section>
  );
}