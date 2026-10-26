// src/components/ResourcesSection.jsx
import React, { useState, useMemo } from "react";
import "./ResourcesSection.css";
import {
  referenceCategories,
  referenceBooks,
  referenceArticles,
  referenceDocuments,
  referenceTestimonies,
  allReferences
} from "../data/referencesData";

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    let list = [];
    if (activeCategory === "books") list = referenceBooks;
    else if (activeCategory === "news") list = referenceArticles;
    else if (activeCategory === "documents") list = referenceDocuments;
    else if (activeCategory === "testimonies") list = referenceTestimonies;
    else list = allReferences;

    const q = searchQuery.toLowerCase().trim();
    if (!q) return list;

    return list.filter((item) => {
      const title = (item.title || item.headline || item.name || "").toLowerCase();
      const author = (item.author || item.byline || item.publication || item.issuingBody || item.role || "").toLowerCase();
      const text = (item.summary || item.archivalExcerpt || item.testimony || "").toLowerCase();
      const quote = (item.keyQuote || "").toLowerCase();
      return title.includes(q) || author.includes(q) || text.includes(q) || quote.includes(q);
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="resources" className="resources-section">
      <div className="resources-container">
        <div className="resources-header">
          <span className="resources-kicker">HISTORICAL ARCHIVES & LIBRARY</span>
          <h2 className="resources-title">Memorial Library: Books, News & Documents</h2>
          <p className="resources-subtitle">
            A comprehensive, verified compendium of published literature, contemporary 1976 news reports, official state commission findings, United Nations resolutions, and eyewitness oral histories.
          </p>

          {/* Category Tabs */}
          <div className="resources-tabs-row">
            {referenceCategories.map((cat) => (
              <button
                key={cat.id}
                className={`resource-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="resources-search-box">
            <input
              type="text"
              className="resources-search-input"
              placeholder="Search books, authors, 1976 newspapers, or testimonies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="resources-search-clear"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Content Stream */}
        <div className="resources-grid">
          {filteredItems.map((item) => (
            <article key={item.id} className={`resource-card resource-type-${item.type}`}>
              {/* Type Badge */}
              <div className="card-badge-row">
                {item.type === "books" && (
                  <span className="type-badge badge-book">📚 Book & Scholarly Work</span>
                )}
                {item.type === "news" && (
                  <span className="type-badge badge-news">📰 1976 Press Article</span>
                )}
                {item.type === "documents" && (
                  <span className="type-badge badge-doc">⚖️ Official Document / Resolution</span>
                )}
                {item.type === "testimonies" && (
                  <span className="type-badge badge-testimony">🎙️ Eyewitness Testimony</span>
                )}

                {item.year && <span className="resource-year-tag">{item.year}</span>}
                {item.date && <span className="resource-year-tag">{item.date}</span>}
              </div>

              {/* Title & Author / Source */}
              <h3 className="resource-heading">
                {item.title || item.headline || item.name}
              </h3>

              {item.author && (
                <p className="resource-author">
                  <strong>Author:</strong> {item.author} {item.publisher && `• ${item.publisher}`}
                </p>
              )}

              {item.publication && (
                <p className="resource-author">
                  <strong>Publication:</strong> {item.publication} {item.byline && `(${item.byline})`}
                </p>
              )}

              {item.issuingBody && (
                <p className="resource-author">
                  <strong>Issuing Authority:</strong> {item.issuingBody}
                </p>
              )}

              {item.role && (
                <p className="resource-author">
                  <strong>Role in 1976:</strong> {item.role}
                </p>
              )}

              {/* Main Text Content */}
              {item.summary && <p className="resource-body-text">{item.summary}</p>}

              {item.archivalExcerpt && (
                <div className="resource-excerpt-box">
                  <span className="excerpt-label">1976 Newspaper Excerpt:</span>
                  <p>{item.archivalExcerpt}</p>
                </div>
              )}

              {item.testimony && (
                <div className="resource-excerpt-box testimony-box">
                  <span className="excerpt-label">First-Person Account:</span>
                  <p>{item.testimony}</p>
                </div>
              )}

              {item.keyQuote && (
                <blockquote className="resource-quote">
                  {item.keyQuote}
                </blockquote>
              )}

              {item.significance && (
                <div className="resource-significance">
                  <strong>Historical Significance:</strong> {item.significance}
                </div>
              )}

              {item.keyPoints && item.keyPoints.length > 0 && (
                <ul className="resource-key-points">
                  {item.keyPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              )}

              {/* Link or Reference Reference */}
              <div className="resource-card-footer">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-external-link"
                  >
                    View Archival Source / Record ↗
                  </a>
                ) : (
                  <span className="resource-verified-tag">✓ Verified Historical Record</span>
                )}
                {item.isbn && <span className="resource-isbn">ISBN: {item.isbn}</span>}
                {item.documentRef && <span className="resource-isbn">Ref: {item.documentRef}</span>}
              </div>
            </article>
          ))}
        </div>

        {/* Archival Institutions Banner */}
        <div className="trusted-archives-banner">
          <h4>Key Archival Repositories & Digital Collections</h4>
          <p>
            The research on this memorial platform is cross-referenced with collections preserved by South African national archives:
          </p>
          <div className="archives-links-grid">
            <a href="https://www.sahistory.org.za/article/june-16-soweto-youth-uprising" target="_blank" rel="noopener noreferrer">
              🏛️ South African History Online (SAHO)
            </a>
            <a href="https://www.historicalpapers.wits.ac.za/" target="_blank" rel="noopener noreferrer">
              🏛️ Wits University Historical Papers
            </a>
            <a href="https://www.nelsonmandela.org/" target="_blank" rel="noopener noreferrer">
              🏛️ Nelson Mandela Foundation
            </a>
            <a href="https://www.justice.gov.za/trc/" target="_blank" rel="noopener noreferrer">
              🏛️ Truth & Reconciliation Commission (TRC)
            </a>
            <a href="https://digitallibrary.un.org/" target="_blank" rel="noopener noreferrer">
              🏛️ United Nations Digital Library
            </a>
            <a href="https://www.joburg.org.za/play_/arts-and-culture/Pages/Hector-Pieterson-Memorial-and-Museum.aspx" target="_blank" rel="noopener noreferrer">
              🏛️ Hector Pieterson Memorial & Museum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
