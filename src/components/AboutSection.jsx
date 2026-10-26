// src/components/AboutSection.jsx
import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-kicker">EDUCATIONAL MEMORIAL INITIATIVE</span>
          <h2 className="about-title">About This Memorial Platform</h2>
        </div>

        <div className="about-bio-card">
          <p className="about-lead">
            Hello! I'm <strong>Bonga Manzini</strong>, a BSc Informatics student passionate about technology, historical education, and cultural preservation. This website is a dedicated digital memorial built to honor the memory and legacy of <strong>16 June 1976</strong> — a defining watershed in South Africa’s history that demonstrates the immortal courage of young people standing united against tyranny.
          </p>

          <p>
            As an informatics student, I believe digital tools have a sacred responsibility to preserve truth, combat historical amnesia, and provide young South Africans with open, verified access to their own heritage. This platform was developed to be <strong>rigorously accurate</strong>, bringing together published academic books, primary 1976 newspaper reports, Truth and Reconciliation Commission findings, and interactive visual timelines.
          </p>
        </div>

        <div className="about-features-grid">
          <div className="about-feature-box">
            <span className="feature-icon">⏳</span>
            <h4>Interactive Event Slideshows</h4>
            <p>Every milestone on the timeline features dedicated archival photographs, document facsimiles, and eyewitness context.</p>
          </div>

          <div className="about-feature-box">
            <span className="feature-icon">📚</span>
            <h4>Curated Academic Library</h4>
            <p>Scholarly books, historical synopses, and direct links to institutions like South African History Online and Wits Archives.</p>
          </div>

          <div className="about-feature-box">
            <span className="feature-icon">📰</span>
            <h4>Contemporary 1976 Press</h4>
            <p>Front-page coverage and editorials from The World, Rand Daily Mail, The New York Times, and The Guardian.</p>
          </div>

          <div className="about-feature-box">
            <span className="feature-icon">⚖️</span>
            <h4>Verified Truth & Primary Sources</h4>
            <p>Fact-checking historical myths against the Cillié Commission and TRC records, honoring Hastings Ndlovu, Hector Pieterson, and all fallen youth.</p>
          </div>
        </div>

        <div className="about-connect-box">
          <h3>Connect & Contribute</h3>
          <p>
            Historical preservation is an ongoing collaborative endeavor. If you have archival documents, oral histories, or feedback to share, please reach out:
          </p>
          <div className="about-links-row">
            <a
              href="https://www.linkedin.com/in/bonga-manzini"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn"
            >
              💼 LinkedIn: bonga-manzini
            </a>
            <a
              href="https://github.com/bongamanzini"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn"
            >
              💻 GitHub: bongamanzini
            </a>
            <a
              href="mailto:contact@bongamanzini.co.za"
              className="about-social-btn"
            >
              📧 Email Contact
            </a>
          </div>
        </div>

        <div className="about-badge-footer">
          <span>Made with ❤️ & reverence in South Africa 🇿🇦</span>
        </div>
      </div>
    </section>
  );
}
