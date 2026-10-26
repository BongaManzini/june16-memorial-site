// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HistoricalContextSection from "./components/HistoricalContextSection";
import TimelineSection from "./components/TimelineSection";
import HeroesSection from "./components/HeroesSection";
import ResourcesSection from "./components/ResourcesSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="context">
          <HistoricalContextSection />
        </section>

        <section id="timeline">
          <TimelineSection />
        </section>

        <section id="heroes">
          <HeroesSection />
        </section>

        <section id="resources">
          <ResourcesSection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
