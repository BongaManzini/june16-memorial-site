// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import GallerySection from "./components/GallerySection";
import ResourcesSection from "./components/ResourcesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <section id="hero"><HeroSection /></section>
      <section id="timeline"><TimelineSection /></section>
      <section id="gallery"><GallerySection /></section>
      <section id="resources"><ResourcesSection /></section>
      <section id="about"><AboutSection /></section>
      <Footer />
    </div>
  );
}

export default App;
