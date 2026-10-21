import React from "react";
import "./TimelineModal.css";

const TimelineModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="timeline-modal-overlay" onClick={onClose}>
      <div className="timeline-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="timeline-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{event.title} ({event.year})</h2>
        <p>{event.description}</p>

        {/* Media Section */}
        {event.mediaType === "image" && (
          <img
            src={event.media}
            alt={event.title}
            className="timeline-modal-media"
          />
        )}
        {event.mediaType === "video" && (
          <div className="video-container">
            <iframe
              className="timeline-modal-media"
              src={event.media}
              title={event.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {event.mediaType === "audio" && (
          <audio
            className="timeline-modal-media"
            controls
            src={event.media}
          />
        )}

        {/* Additional Info (if any) */}
        {event.additionalInfo && (
          <div className="timeline-modal-additional">
            <h3>Key Details</h3>
            <ul>
              {event.additionalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineModal;