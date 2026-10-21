import React, { useState } from "react";
import "./GallerySection.css";

// Manually import images
import img1 from "../assets/1976-678x381.jpg";
import img2 from "../assets/20_obama_g_w.jpg";
import img3 from "../assets/AL2446_0127.jpg";
import img4 from "../assets/AL2446_0235.jpg";
import img5 from "../assets/AL2446_1955.jpg";
import img6 from "../assets/hector-pieterson-sam-nzima.jpg";
import img7 from "../assets/https___archive-images.prod.global.a201836.reutersmedia.net_2016_10_10_2016-10-10T172004Z_4265_S1BEUGESXQAF_RTRMADP_0_SAFRICA-PROTESTS.avif";
import img8 from "../assets/images (1).jpeg";
import img9 from "../assets/images (2).jpeg";
import img10 from "../assets/images (3).jpeg";
import img11 from "../assets/images.jpeg";
import img12 from "../assets/p06rb5gb.jpg.webp";
import img13 from "../assets/photograph_and_c_noel_watson_security_forces_with_dogs_hold_back_crowd_protesting_against_minister_piet_koornhof_being_given_1980.jpg";
import img14 from "../assets/sam-coffin.png";
import img15 from "../assets/sharpeville-funeral.jpg";
import img16 from "../assets/Soweto-uprising-student-protests-June-16-1976.webp";

// Create array
const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16
];

function GallerySection() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Soweto archive ${i}`}
            onClick={() => setModalImage(img)}
            className="gallery-thumb"
          />
        ))}
      </div>

      {modalImage && (
        <div className="gallery-modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Zoomed" className="gallery-modal-img" />
        </div>
      )}
    </section>
  );
}

export default GallerySection;
