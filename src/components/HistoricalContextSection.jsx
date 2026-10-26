// src/components/HistoricalContextSection.jsx
import React, { useState } from "react";
import "./HistoricalContextSection.css";
import { rootCauses, marchRouteStops, truthVsMyth, keyMemorialStats } from "../data/contextData";

export default function HistoricalContextSection() {
  const [activeTab, setActiveTab] = useState("causes");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="context" className="context-section">
      <div className="context-container">
        <div className="context-header">
          <span className="context-kicker">HISTORICAL FOUNDATIONS</span>
          <h2 className="context-title">The Road to June 16: Causes, Route & Truths</h2>
          <p className="context-subtitle">
            Unpack the structural forces behind the uprising, trace the peaceful morning march route through Soweto, and separate verified historical facts from persistent myths.
          </p>

          {/* Sub-Navigation Tabs */}
          <div className="context-tabs-row">
            <button
              className={`context-tab-btn ${activeTab === "causes" ? "active" : ""}`}
              onClick={() => setActiveTab("causes")}
            >
              1. Root Causes (1953–1976)
            </button>
            <button
              className={`context-tab-btn ${activeTab === "route" ? "active" : ""}`}
              onClick={() => setActiveTab("route")}
            >
              2. The March Route Map
            </button>
            <button
              className={`context-tab-btn ${activeTab === "myths" ? "active" : ""}`}
              onClick={() => setActiveTab("myths")}
            >
              3. Truth vs. Myth Fact-Check
            </button>
            <button
              className={`context-tab-btn ${activeTab === "stats" ? "active" : ""}`}
              onClick={() => setActiveTab("stats")}
            >
              4. Key Memorial Data
            </button>
          </div>
        </div>

        {/* Tab 1: Root Causes */}
        {activeTab === "causes" && (
          <div className="tab-panel tab-causes">
            <div className="causes-grid">
              {rootCauses.map((cause) => (
                <div key={cause.id} className="cause-card">
                  <div className="cause-tag">{cause.tag}</div>
                  <h3 className="cause-heading">{cause.title}</h3>
                  <p className="cause-desc">{cause.description}</p>
                  <div className="cause-stat-badge">⚡ {cause.stat}</div>
                </div>
              ))}
            </div>

            <div className="causes-quote-banner">
              <blockquote>
                "The Soweto revolt did not occur because students were unruly. It occurred because the apartheid system had systematically denied Black youth their intellectual birthright, their language, and their fundamental humanity."
              </blockquote>
              <cite>— Prof. Noor Nieftagodien, Head of History Workshop, Wits University</cite>
            </div>
          </div>
        )}

        {/* Tab 2: The March Route Map / Stepper */}
        {activeTab === "route" && (
          <div className="tab-panel tab-route">
            <div className="route-explainer">
              <p>
                On Wednesday morning, 16 June 1976, students executed a meticulously planned peaceful march. Synchronized columns left high schools across Soweto, singing hymns and carrying cardboard placards, aiming to converge at <strong>Orlando Stadium</strong> for a mass prayer rally.
              </p>
            </div>

            <div className="route-stepper">
              {marchRouteStops.map((stop, index) => (
                <div key={stop.step} className="route-step-card">
                  <div className="step-number-col">
                    <div className="step-circle">{stop.step}</div>
                    {index < marchRouteStops.length - 1 && <div className="step-connector"></div>}
                  </div>
                  <div className="step-info-col">
                    <div className="step-header">
                      <span className="step-time">{stop.time}</span>
                      <span className="step-students">{stop.students}</span>
                    </div>
                    <h4 className="step-title">{stop.title}</h4>
                    <span className="step-location">📍 {stop.location}</span>
                    <p className="step-desc">{stop.desc || stop.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="route-note-box">
              <strong>Crucial Historical Note:</strong> The march was intended to end peacefully at Orlando Stadium. The students never reached their destination because Colonel Johannes Kleingeld's police barricade intercepted them at Vilakazi & Moema Streets, unleashing attack dogs and opening fire with live ammunition.
            </div>
          </div>
        )}

        {/* Tab 3: Truth vs Myth */}
        {activeTab === "myths" && (
          <div className="tab-panel tab-myths">
            <div className="myths-intro">
              <p>
                Over decades, popular memory has blurred key historical details. Here are five verified truths documented by historical scholars, the Cillié Commission, and the Truth and Reconciliation Commission (TRC).
              </p>
            </div>

            <div className="myths-accordion">
              {truthVsMyth.map((item) => {
                const isOpen = expandedFaq === item.id;
                return (
                  <div key={item.id} className={`myth-item ${isOpen ? "open" : ""}`}>
                    <button
                      className="myth-header-btn"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="myth-category-tag">{item.category}</span>
                      <span className="myth-question-text">{item.myth}</span>
                      <span className="myth-toggle-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="myth-answer-body">
                        <div className="fact-badge">VERIFIED HISTORICAL FACT</div>
                        <p className="fact-text">{item.fact}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Memorial Statistics */}
        {activeTab === "stats" && (
          <div className="tab-panel tab-stats">
            <div className="stats-grid">
              {keyMemorialStats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sublabel">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
