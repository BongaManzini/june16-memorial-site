// src/components/GallerySection.jsx
import React, { useState, useEffect } from "react";
import "./GallerySection.css";
import assets from "../assets";

const galleryItems = [
  {
    id: 1,
    img: assets.hectorSamNzima,
    title: "Mbuyisa Makhubo Carrying Hector Pieterson",
    date: "16 June 1976",
    caption: "The world-famous photograph taken by Sam Nzima showing 18-year-old Mbuyisa Makhubo carrying 12-year-old Hector Pieterson, flanked by Hector's sister Antoinette Sithole.",
    credit: "Photograph: Sam Nzima / The World / AP Archive"
  },
  {
    id: 2,
    img: assets.sowetoProtestsWebp,
    title: "Thousands of High School Students Marching",
    date: "16 June 1976",
    caption: "A massive, disciplined column of Soweto high school students in uniform marching down the street singing freedom songs.",
    credit: "Associated Press Archival Collection"
  },
  {
    id: 3,
    img: assets.march1976,
    title: "Cardboard Placards of Defiance",
    date: "June 1976",
    caption: "Students carrying handmade placards: 'Away with Afrikaans' and 'Black Education Stinks' in peaceful protest.",
    credit: "Peter Magubane / Bailey's African History Archive"
  },
  {
    id: 4,
    img: assets.policeDogs,
    title: "Security Forces Confronting Demonstrators",
    date: "1976 / 1980 Archive",
    caption: "Apartheid security forces using trained police attack dogs and tear gas to disperse peaceful student assemblies.",
    credit: "Noel Watson / Historic Photographic Collection"
  },
  {
    id: 5,
    img: assets.funeralCrowd,
    title: "Mass Township Funerals Turn into Defiance Rallies",
    date: "1976",
    caption: "Tens of thousands of community members gathered in mass mourning. Funerals became the only open forum where political defiance could be voiced.",
    credit: "Alf Kumalo / Sowetan Historical Papers"
  },
  {
    id: 6,
    img: assets.witsArchive0127,
    title: "Gathering at School Grounds",
    date: "1976",
    caption: "Students assembled inside school gates coordinating classroom boycotts and distributing SASM leaflets.",
    credit: "Historical Papers Research Archive, University of the Witwatersrand (AL2446_0127)"
  },
  {
    id: 7,
    img: assets.witsArchive0235,
    title: "Student Delegates at Planning Meeting",
    date: "1976",
    caption: "Youth delegates in Orlando planning strike actions and drafting demands to the Department of Bantu Education.",
    credit: "Historical Papers Research Archive, University of the Witwatersrand (AL2446_0235)"
  },
  {
    id: 8,
    img: assets.witsArchive1955,
    title: "Young Voices of the Black Consciousness Era",
    date: "1976",
    caption: "Portraits of the youth who stood at the forefront of the student movement.",
    credit: "Historical Papers Research Archive, University of the Witwatersrand (AL2446_1955)"
  },
  {
    id: 9,
    img: assets.samCoffin,
    title: "Tribute to Sam Nzima & Fallen Heroes",
    date: "Historical Archive",
    caption: "Commemorative tribute recognizing Sam Nzima's fearless photojournalism that changed the course of South African history.",
    credit: "The Sowetan / National Heritage Collection"
  },
  {
    id: 10,
    img: assets.obamaMemorial,
    title: "International Pilgrimage to the Memorial",
    date: "Historical Pilgrimage",
    caption: "President Barack Obama with Antoinette Sithole at the Hector Pieterson Memorial in Soweto, paying homage to the sacrifices of 1976.",
    credit: "Official White House Photograph / Pete Souza"
  },
  {
    id: 11,
    img: assets.bbcArchive,
    title: "Archival Broadcast of the Orlando Standoff",
    date: "June 1976",
    caption: "Archival news reel frame showing police vehicles and student lines in Orlando West.",
    credit: "BBC Television Archival Newsroom"
  },
  {
    id: 12,
    img: assets.reutersArchive,
    title: "The Fire of Freedom",
    date: "Historical Archive",
    caption: "Township resistance and aftermath of police suppression preserved in global journalistic archives.",
    credit: "Reuters Archive / Global Historical Photos"
  }
];

export default function GallerySection() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev + 1) % galleryItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  const activeItem = activePhotoIndex !== null ? galleryItems[activePhotoIndex] : null;

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container-inner">
        <div className="gallery-header">
          <span className="gallery-kicker">VISUAL EVIDENCE</span>
          <h2 className="gallery-title">Photographic Archive of the Uprising</h2>
          <p className="gallery-subtitle">
            Authentic historical photographs capturing the peaceful assemblies, the courageous photojournalism of Sam Nzima, the grief of township funerals, and the enduring international memorial.
          </p>
        </div>

        <div className="gallery-cards-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActivePhotoIndex(index)}
            >
              <div className="gallery-card-thumb-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="gallery-card-img"
                  loading="lazy"
                />
                <span className="gallery-card-date">{item.date}</span>
              </div>
              <div className="gallery-card-caption">
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-summary">{item.caption.slice(0, 95)}...</p>
                <span className="gallery-item-credit">{item.credit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Slideshow Modal */}
        {activeItem && (
          <div
            className="gallery-lightbox-overlay"
            onClick={() => setActivePhotoIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="gallery-lightbox-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-lightbox-close"
                onClick={() => setActivePhotoIndex(null)}
                aria-label="Close"
              >
                &times;
              </button>

              <div className="gallery-lightbox-display">
                <img
                  src={activeItem.img}
                  alt={activeItem.title}
                  className="gallery-lightbox-img"
                />

                <button
                  className="lightbox-nav-btn lightbox-prev-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) =>
                      prev === 0 ? galleryItems.length - 1 : prev - 1
                    );
                  }}
                  aria-label="Previous image"
                >
                  &#10094;
                </button>

                <button
                  className="lightbox-nav-btn lightbox-next-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) =>
                      (prev + 1) % galleryItems.length
                    );
                  }}
                  aria-label="Next image"
                >
                  &#10095;
                </button>

                <div className="lightbox-counter">
                  {activePhotoIndex + 1} of {galleryItems.length}
                </div>
              </div>

              <div className="gallery-lightbox-info">
                <div className="lightbox-info-top">
                  <h3 className="lightbox-title">{activeItem.title}</h3>
                  <span className="lightbox-date">{activeItem.date}</span>
                </div>
                <p className="lightbox-desc">{activeItem.caption}</p>
                <span className="lightbox-credit">
                  Archival Source: {activeItem.credit}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
