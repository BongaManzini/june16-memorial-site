// src/components/TimelineSection.jsx
import React, { useState, useMemo, useEffect } from "react";
import "./TimelineSection.css";
import TimelineModal from "./TimelineModal";
import TimelineSlideshow from "./TimelineSlideshow";
import Timeline3DDeck from "./Timeline3DDeck";
import TimelineD3Track from "./TimelineD3Track";
import { timelineEvents, timelinePhases } from "../data/timelineData";

export default function TimelineSection() {
  const [viewMode, setViewMode] = useState("deck"); // "deck" (3D) or "stream" (List)
  const [selectedPhase, setSelectedPhase] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    return timelineEvents.filter((item) => {
      const matchesPhase =
        selectedPhase === "all" || item.phase === selectedPhase;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.summary.toLowerCase().includes(q) ||
        item.year.toLowerCase().includes(q) ||
        (item.keyFigure && item.keyFigure.toLowerCase().includes(q)) ||
        (item.location && item.location.toLowerCase().includes(q));

      return matchesPhase && matchesSearch;
    });
  }, [selectedPhase, searchQuery]);

  // Reset active deck index if filtered events change out of range
  useEffect(() => {
    if (activeDeckIndex >= filteredEvents.length) {
      setActiveDeckIndex(0);
    }
  }, [filteredEvents.length, activeDeckIndex]);

  return (
    <section id="timeline" className="timeline-section-container">
      <div className="timeline-header-area">
        <span className="timeline-kicker">INTERACTIVE HISTORICAL CHRONOLOGY</span>
        <h2 className="timeline-main-title">The Path to June 16: Timeline of Resistance</h2>
        <p className="timeline-intro-text">
          Navigate through the milestones of student defiance using our 3D perspective slideshow deck or switch to the documentary archival list. Each milestone features archival photographs, verified primary sources, and eyewitness accounts.
        </p>

        {/* View Mode Switcher */}
        <div className="timeline-view-switcher">
          <button
            type="button"
            className={`view-switch-btn ${viewMode === "deck" ? "active" : ""}`}
            onClick={() => setViewMode("deck")}
          >
            🏛️ 3D Perspective Slideshow
          </button>
          <button
            type="button"
            className={`view-switch-btn ${viewMode === "stream" ? "active" : ""}`}
            onClick={() => setViewMode("stream")}
          >
            📜 Chronological Archival List
          </button>
        </div>

        {/* Phase Filter Tabs */}
        <div className="phase-filters-row">
          {timelinePhases.map((phase) => (
            <button
              key={phase.id}
              className={`phase-tab-btn ${selectedPhase === phase.id ? "active" : ""}`}
              onClick={() => {
                setSelectedPhase(phase.id);
                setActiveDeckIndex(0);
              }}
            >
              {phase.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="timeline-search-box">
          <input
            type="text"
            className="timeline-search-input"
            placeholder="Search timeline (e.g. Morris Isaacson, Hector, Afrikaans, Tutu, DOCC)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveDeckIndex(0);
            }}
          />
          {searchQuery && (
            <button
              className="timeline-search-clear"
              onClick={() => {
                setSearchQuery("");
                setActiveDeckIndex(0);
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="timeline-empty-notice">
          <p>No historical events matched your search. Try resetting the filters or clearing the search query.</p>
          <button
            className="timeline-reset-btn"
            onClick={() => {
              setSelectedPhase("all");
              setSearchQuery("");
              setActiveDeckIndex(0);
            }}
          >
            Show All Events
          </button>
        </div>
      ) : (
        <>
          {/* MODE 1: 3D SLIDESHOW PERSPECTIVE DECK + D3 TRACK */}
          {viewMode === "deck" && (
            <div className="timeline-deck-presentation-area">
              {/* D3.js Interactive Timeline Scrubber */}
              <TimelineD3Track
                events={filteredEvents}
                activeIndex={activeDeckIndex}
                onSelectEvent={(idx) => setActiveDeckIndex(idx)}
              />

              {/* 3D Perspective Slideshow Stage */}
              <Timeline3DDeck
                events={filteredEvents}
                activeIndex={activeDeckIndex}
                onChangeIndex={setActiveDeckIndex}
                onOpenModal={(event) => setActiveEvent(event)}
              />
            </div>
          )}

          {/* MODE 2: CHRONOLOGICAL STREAM / LIST */}
          {viewMode === "stream" && (
            <div className="timeline-stream">
              {filteredEvents.map((event) => (
                <article key={event.id} className="timeline-node">
                  <div className="timeline-marker">
                    <div className="timeline-pin"></div>
                    <div className="timeline-spine"></div>
                  </div>

                  <div className="timeline-card">
                    <div className="card-top-row">
                      <div className="card-pill-group">
                        <span className="card-year-tag">{event.year}</span>
                        {event.date && event.date !== event.year && (
                          <span className="card-date-tag">{event.date}</span>
                        )}
                        {event.location && (
                          <span className="card-location-tag">📍 {event.location}</span>
                        )}
                      </div>
                    </div>

                    <h3 className="card-heading">{event.title}</h3>
                    {event.subtitle && <p className="card-subheading">{event.subtitle}</p>}

                    {/* Slideshow inside card */}
                    {event.slides && event.slides.length > 0 && (
                      <div className="card-slideshow-wrapper">
                        <TimelineSlideshow slides={event.slides} />
                      </div>
                    )}

                    <p className="card-summary">{event.summary}</p>

                    {event.keyQuote && (
                      <div className="card-quote-snippet">
                        {event.keyQuote}
                      </div>
                    )}

                    <div className="card-actions-row">
                      <button
                        className="card-details-btn"
                        onClick={() => setActiveEvent(event)}
                      >
                        View In-Depth Archive & Slides ({event.slides ? event.slides.length : 0}) →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}

      {/* In-Depth Historical Modal */}
      {activeEvent && (
        <TimelineModal
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </section>
  );
}