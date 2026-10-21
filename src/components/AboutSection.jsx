import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About This Project</h2>

        <p>
          Hello! I'm <strong>Bonga Manzini</strong>, a BSc Informatics student passionate about technology, education, and cultural preservation. This website is a personal project built to honor the memory and legacy of <strong>June 16</strong> — a defining moment in South Africa’s history that reminds us of the power of youth voices and collective resistance.
        </p>

        <p>
          As someone deeply interested in using digital tools for storytelling and social awareness, I created this platform to educate and engage young South Africans with interactive content, history, and multimedia. It’s more than just a timeline — it's a tribute to the youth who fought for a better future.
        </p>

        <h3>What This Website Offers</h3>
        <ul>
          <li>🕒 A visual, interactive timeline of June 16 events</li>
          <li>🎥 Multimedia content (images, videos, audio)</li>
          <li>🧠 Educational insights on the Soweto Uprising</li>
          <li>📱 Responsive design for mobile & desktop</li>
        </ul>

        <h3>Why It Matters</h3>
        <p>
          Our generation has new tools — but the same responsibility: to fight for justice, equality, and truth. Remembering June 16 is not just about the past. It's about how we move forward.
        </p>

        <h3>Connect With Me</h3>
        <ul>
          <li>
            📧 Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/bonga-manzini" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/bonga-manzini
            </a>
          </li>
          <li>
            💻 GitHub:{" "}
            <a href="https://github.com/bongamanzini" target="_blank" rel="noopener noreferrer">
              github.com/bongamanzini
            </a>
          </li>
        </ul>

        <h4>Made with ❤️ in South Africa</h4>
      </div>
    </section>
  );
};

export default AboutSection;
