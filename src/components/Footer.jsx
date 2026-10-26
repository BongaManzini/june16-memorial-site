// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="memorial-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-brand-title">✊ June 16 Memorial Archive</span>
            <p className="footer-brand-desc">
              Dedicated to the memory of Hastings Ndlovu, Hector Pieterson, and the hundreds of brave school children of 1976 whose sacrifice broke the back of apartheid.
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-group-title">Memorial Navigation</span>
            <ul>
              <li onClick={() => scrollTo("hero")}>Home Overview</li>
              <li onClick={() => scrollTo("context")}>Causes & March Route</li>
              <li onClick={() => scrollTo("timeline")}>Timeline & Event Slideshows</li>
              <li onClick={() => scrollTo("heroes")}>Student Leaders & Martyrs</li>
              <li onClick={() => scrollTo("resources")}>Books, Articles & Documents</li>
              <li onClick={() => scrollTo("gallery")}>Photographic Archive</li>
              <li onClick={() => scrollTo("about")}>About the Project</li>
            </ul>
          </div>

          <div className="footer-quote-box">
            <span className="footer-group-title">Eternal Tribute</span>
            <blockquote>
              "Morena boloka sechaba sa heso, o fedise dintwa le matshwenyeho... Lord bless our nation, halt conflicts and tribulations."
            </blockquote>
            <p className="footer-remembrance">
              Never forget. Never repeat. Forward to free, equal, and dignified education for all.
            </p>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p>&copy; {new Date().getFullYear()} June 16 Soweto Youth Memorial. Curated by Bonga Manzini.</p>
          <p className="footer-disclaimer">
            Academic & educational memorial project. All archival photographs, newspaper excerpts, and historical quotations belong to their respective copyright holders and historical archives.
          </p>
        </div>
      </div>
    </footer>
  );
}
