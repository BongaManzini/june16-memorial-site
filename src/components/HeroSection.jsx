// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import assets from "../assets";

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-container">
      <div className="hero-backdrop-img" style={{ backgroundImage: `url(${assets.sowetoProtestsWebp})` }}></div>
      <div className="hero-overlay-dark">
        <div className="hero-content-shell">
          <div className="hero-kicker-badge">
            🇿🇦 SOWETO • 16 JUNE 1976 • NATIONAL YOUTH DAY
          </div>

          <h1 className="hero-headline">
            June 16, 1976: The Soweto Uprising
          </h1>

          <p className="hero-tagline">
            The historic day South African school children rose peacefully against Bantu Education and the Afrikaans Medium Decree, shattering the myth of apartheid supremacy and transforming the global anti-apartheid struggle.
          </p>

          {/* Quick Metrics */}
          <div className="hero-metrics-row">
            <div className="hero-metric-card">
              <span className="metric-number">20,000+</span>
              <span className="metric-label">Students Marched</span>
              <span className="metric-detail">Unarmed school children united in song</span>
            </div>

            <div className="hero-metric-card highlight-card">
              <span className="metric-number">700+</span>
              <span className="metric-label">Estimated Lives Lost</span>
              <span className="metric-detail">Killed in nationwide police repression</span>
            </div>

            <div className="hero-metric-card">
              <span className="metric-number">160+</span>
              <span className="metric-label">Townships Rose</span>
              <span className="metric-detail">Nationwide revolt through late 1977</span>
            </div>
          </div>

          {/* Archival Quote */}
          <div className="hero-quote-container">
            <blockquote>
              "These students were not just fighting against language — they were fighting for their human dignity. They wanted an education that recognized them as full human beings."
            </blockquote>
            <cite>— Antoinette Sithole, Hector Pieterson's Sister</cite>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="hero-actions-row">
            <button
              className="hero-btn-primary"
              onClick={() => scrollTo("timeline")}
            >
              Explore Timeline & Event Slideshows ↓
            </button>
            <button
              className="hero-btn-secondary"
              onClick={() => scrollTo("context")}
            >
              Root Causes & March Route
            </button>
            <button
              className="hero-btn-secondary"
              onClick={() => scrollTo("resources")}
            >
              Books & 1976 News Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}