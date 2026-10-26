// src/components/TimelineModal.jsx
import React, { useEffect } from "react";
import "./TimelineModal.css";
import TimelineSlideshow from "./TimelineSlideshow";

export default function TimelineModal({ event, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  return (
    <div className="timeline-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="timeline-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="timeline-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-header">
          <div className="modal-badges">
            <span className="modal-year-badge">{event.year}</span>
            {event.date && event.date !== event.year && (
              <span className="modal-date-badge">{event.date}</span>
            )}
            {event.location && (
              <span className="modal-loc-badge">📍 {event.location}</span>
            )}
          </div>
          <h2 className="modal-title">{event.title}</h2>
          {event.subtitle && <h3 className="modal-subtitle">{event.subtitle}</h3>}
        </div>

        <div className="modal-body-scroll">
          {/* Multi-Slide Slideshow */}
          {event.slides && event.slides.length > 0 && (
            <div className="modal-slideshow-container">
              <TimelineSlideshow slides={event.slides} />
            </div>
          )}

          {/* Key Quote */}
          {event.keyQuote && (
            <blockquote className="modal-quote">
              {event.keyQuote}
            </blockquote>
          )}

          {/* Narrative Summary */}
          <div className="modal-section">
            <h4 className="modal-section-title">Historical Overview</h4>
            <p className="modal-summary-text">{event.summary}</p>
          </div>

          {/* Key Figures & Impact */}
          {(event.keyFigure || event.impact) && (
            <div className="modal-meta-grid">
              {event.keyFigure && (
                <div className="modal-meta-card">
                  <span className="meta-card-label">Key Figures Involved</span>
                  <strong className="meta-card-value">{event.keyFigure}</strong>
                </div>
              )}
              {event.impact && (
                <div className="modal-meta-card">
                  <span className="meta-card-label">Historical Significance</span>
                  <span className="meta-card-value">{event.impact}</span>
                </div>
              )}
            </div>
          )}

          {/* Detailed Points */}
          {event.details && event.details.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Archival & Historical Record</h4>
              <ul className="modal-details-list">
                {event.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="modal-close-btn" onClick={onClose}>
            Close Event Window
          </button>
        </div>
      </div>
    </div>
  );
}