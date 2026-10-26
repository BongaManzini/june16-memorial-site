// src/components/TimelineSlideshow.jsx
import React, { useState, useEffect } from "react";
import "./TimelineSlideshow.css";

export default function TimelineSlideshow({ slides = [], autoPlay = false, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slides]);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-box" onClick={(e) => e.stopPropagation()}>
      <div className="slideshow-image-wrapper">
        <img
          src={currentSlide.image}
          alt={currentSlide.title || "Timeline slide"}
          className="slideshow-image"
          loading="lazy"
        />

        {slides.length > 1 && (
          <>
            <button
              className="slideshow-arrow slideshow-prev"
              onClick={handlePrev}
              aria-label="Previous slide"
              type="button"
            >
              &#10094;
            </button>
            <button
              className="slideshow-arrow slideshow-next"
              onClick={handleNext}
              aria-label="Next slide"
              type="button"
            >
              &#10095;
            </button>

            <div className="slideshow-counter">
              {currentIndex + 1} / {slides.length}
            </div>
          </>
        )}
      </div>

      <div className="slideshow-caption-area">
        {currentSlide.title && (
          <h4 className="slideshow-slide-title">{currentSlide.title}</h4>
        )}
        {currentSlide.caption && (
          <p className="slideshow-caption-text">{currentSlide.caption}</p>
        )}
        {currentSlide.credit && (
          <span className="slideshow-credit-tag">Source: {currentSlide.credit}</span>
        )}

        {slides.length > 1 && (
          <div className="slideshow-dots-row">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slideshow-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => handleDotClick(idx, e)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
