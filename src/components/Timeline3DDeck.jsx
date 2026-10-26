// src/components/Timeline3DDeck.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Timeline3DDeck.css";
import TimelineSlideshow from "./TimelineSlideshow";

export default function Timeline3DDeck({
  events = [],
  activeIndex = 0,
  onChangeIndex,
  onOpenModal,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const touchStartX = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const duration = 6500; // ms per slide in auto-mode

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (events.length === 0) return;
    onChangeIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
    setProgress(0);
  }, [events.length, onChangeIndex]);

  const handleNext = useCallback(() => {
    if (events.length === 0) return;
    onChangeIndex((prev) => (prev + 1) % events.length);
    setProgress(0);
  }, [events.length, onChangeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Auto-play slideshow timer
  useEffect(() => {
    if (!isPlaying || events.length <= 1) {
      clearInterval(progressIntervalRef.current);
      clearTimeout(autoPlayTimerRef.current);
      setProgress(0);
      return;
    }

    const intervalStep = 50;
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + (intervalStep / duration) * 100, 100));
    }, intervalStep);

    autoPlayTimerRef.current = setTimeout(() => {
      handleNext();
    }, duration);

    return () => {
      clearInterval(progressIntervalRef.current);
      clearTimeout(autoPlayTimerRef.current);
    };
  }, [isPlaying, activeIndex, events.length, handleNext]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) handlePrev();
    else if (deltaX < -45) handleNext();
    touchStartX.current = null;
  };

  // Subtle 3D Mouse Parallax Tilt for active card
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 6; // max 6 deg
    const rotateX = -(y / (rect.height / 2)) * 6; // max 6 deg
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  if (events.length === 0) return null;

  return (
    <div
      className="deck-3d-root"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Stage Controls Bar */}
      <div className="deck-control-bar">
        <div className="deck-info-indicator">
          <span className="deck-pill-kicker">3D PERSPECTIVE DECK</span>
          <span className="deck-slide-count">
            Slide {activeIndex + 1} of {events.length}
          </span>
        </div>

        <div className="deck-playback-actions">
          <button
            type="button"
            className={`deck-autoplay-btn ${isPlaying ? "playing" : ""}`}
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label="Toggle auto slideshow"
          >
            {isPlaying ? "⏸ Pause Slideshow" : "▶ Auto-Play Tour"}
          </button>

          <div className="deck-nav-btn-group">
            <button
              type="button"
              className="deck-nav-btn"
              onClick={handlePrev}
              aria-label="Previous slide (Left Arrow)"
              title="Previous Milestone (Left Arrow)"
            >
              &#10094; Prev
            </button>
            <button
              type="button"
              className="deck-nav-btn"
              onClick={handleNext}
              aria-label="Next slide (Right Arrow)"
              title="Next Milestone (Right Arrow)"
            >
              Next &#10095;
            </button>
          </div>
        </div>
      </div>

      {/* Auto-play progress bar */}
      {isPlaying && (
        <div className="deck-progress-track">
          <div
            className="deck-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* The 3D Spatial Viewport */}
      <div className="deck-3d-viewport">
        <div className="deck-3d-stage">
          {events.map((event, index) => {
            const offset = index - activeIndex;

            // Only render cards within visibility range
            if (Math.abs(offset) > 2) return null;

            const isActive = offset === 0;

            // Compute 3D Card Transforms
            let transformStyle = "";
            let zIndex = 1;
            let opacity = 1;
            let pointerEvents = "auto";

            if (offset === 0) {
              transformStyle = `translateX(0%) translateZ(0px) rotateY(${tilt.y}deg) rotateX(${tilt.x}deg) scale(1)`;
              zIndex = 10;
              opacity = 1;
            } else if (offset === 1) {
              transformStyle = `translateX(60%) translateZ(-160px) rotateY(-26deg) scale(0.85)`;
              zIndex = 5;
              opacity = 0.55;
            } else if (offset === -1) {
              transformStyle = `translateX(-60%) translateZ(-160px) rotateY(26deg) scale(0.85)`;
              zIndex = 5;
              opacity = 0.55;
            } else if (offset === 2) {
              transformStyle = `translateX(110%) translateZ(-320px) rotateY(-38deg) scale(0.72)`;
              zIndex = 2;
              opacity = 0.22;
            } else if (offset === -2) {
              transformStyle = `translateX(-110%) translateZ(-320px) rotateY(38deg) scale(0.72)`;
              zIndex = 2;
              opacity = 0.22;
            }

            return (
              <div
                key={event.id}
                className={`deck-card-3d ${isActive ? "card-active" : "card-flanking"}`}
                style={{
                  transform: transformStyle,
                  zIndex,
                  opacity,
                  pointerEvents,
                }}
                onClick={() => {
                  if (!isActive) {
                    onChangeIndex(index);
                  }
                }}
                onMouseMove={isActive ? handleMouseMove : undefined}
                onMouseLeave={isActive ? handleMouseLeave : undefined}
              >
                {/* 3D Depth Specular Sheen */}
                <div className="deck-card-sheen" />

                {/* Card Top Pill Header */}
                <div className="deck-card-topbar">
                  <div className="deck-pills-cluster">
                    <span className="deck-year-badge">{event.year}</span>
                    {event.date && event.date !== event.year && (
                      <span className="deck-date-badge">{event.date}</span>
                    )}
                    {event.location && (
                      <span className="deck-loc-badge">📍 {event.location}</span>
                    )}
                  </div>
                  <span className="deck-landmark-tag">
                    #{index + 1} of {events.length}
                  </span>
                </div>

                {/* Headings */}
                <h3 className="deck-card-title">{event.title}</h3>
                {event.subtitle && (
                  <p className="deck-card-subtitle">{event.subtitle}</p>
                )}

                {/* Slideshow inside the 3D card */}
                {event.slides && event.slides.length > 0 && (
                  <div className="deck-slideshow-host">
                    <TimelineSlideshow slides={event.slides} />
                  </div>
                )}

                {/* Event Narrative Summary */}
                <p className="deck-card-summary">{event.summary}</p>

                {/* Archival Quote Banner */}
                {event.keyQuote && (
                  <div className="deck-card-quote">
                    {event.keyQuote}
                  </div>
                )}

                {/* Quick Impact / Key Figure Row */}
                {(event.keyFigure || event.impact) && (
                  <div className="deck-meta-mini-row">
                    {event.keyFigure && (
                      <div className="deck-meta-chip">
                        <span className="chip-label">Key Figure:</span>
                        <span className="chip-val">{event.keyFigure}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Row */}
                <div className="deck-card-action-row">
                  <button
                    type="button"
                    className="deck-dossier-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal(event);
                    }}
                  >
                    Explore Archival Dossier & All Slides ({event.slides?.length || 0}) →
                  </button>

                  {!isActive && (
                    <span className="deck-click-hint">Click to Center</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Large Lateral 3D Floating Arrows */}
        <button
          type="button"
          className="stage-chevron-arrow arrow-left"
          onClick={handlePrev}
          aria-label="Previous milestone"
        >
          &#10094;
        </button>
        <button
          type="button"
          className="stage-chevron-arrow arrow-right"
          onClick={handleNext}
          aria-label="Next milestone"
        >
          &#10095;
        </button>
      </div>

      {/* Quick Jump Landmark Strip */}
      <div className="deck-jump-strip">
        <span className="jump-strip-title">Fast Jump:</span>
        <button
          type="button"
          className="jump-pill"
          onClick={() => onChangeIndex(0)}
        >
          1953: Bantu Education
        </button>
        <button
          type="button"
          className="jump-pill"
          onClick={() => {
            const idx = events.findIndex((e) => e.id === "afrikaans-decree-1974");
            if (idx !== -1) onChangeIndex(idx);
          }}
        >
          1974: Afrikaans Decree
        </button>
        <button
          type="button"
          className="jump-pill"
          onClick={() => {
            const idx = events.findIndex((e) => e.id === "docc-meeting-june13");
            if (idx !== -1) onChangeIndex(idx);
          }}
        >
          13 June: DOCC Meeting
        </button>
        <button
          type="button"
          className="jump-pill highlight"
          onClick={() => {
            const idx = events.findIndex((e) => e.id === "june16-0930");
            if (idx !== -1) onChangeIndex(idx);
          }}
        >
          16 June: Fatal Shots
        </button>
        <button
          type="button"
          className="jump-pill highlight"
          onClick={() => {
            const idx = events.findIndex((e) => e.id === "june16-0945");
            if (idx !== -1) onChangeIndex(idx);
          }}
        >
          Sam Nzima Photo
        </button>
        <button
          type="button"
          className="jump-pill"
          onClick={() => {
            const idx = events.findIndex((e) => e.id === "un-resolution-392");
            if (idx !== -1) onChangeIndex(idx);
          }}
        >
          UN Res 392
        </button>
        <button
          type="button"
          className="jump-pill"
          onClick={() => onChangeIndex(events.length - 1)}
        >
          Modern Legacy
        </button>
      </div>
    </div>
  );
}
