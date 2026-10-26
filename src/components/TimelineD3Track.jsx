// src/components/TimelineD3Track.jsx
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./TimelineD3Track.css";

export default function TimelineD3Track({
  events = [],
  activeIndex = 0,
  onSelectEvent,
}) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || events.length === 0) return;

    const width = containerRef.current.clientWidth || 800;
    const height = 74;
    const margin = { top: 12, right: 35, bottom: 24, left: 35 };
    const innerWidth = width - margin.left - margin.right;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg.attr("width", width).attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scale mapping event indices to x-position
    const xScale = d3
      .scaleLinear()
      .domain([0, events.length - 1])
      .range([0, innerWidth]);

    // Gradient for the timeline track
    const defs = svg.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", "track-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#3f3f46");

    gradient
      .append("stop")
      .attr("offset", "50%")
      .attr("stop-color", "#d97706");

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#fbbf24");

    // Background track line
    g.append("line")
      .attr("x1", 0)
      .attr("x2", innerWidth)
      .attr("y1", 20)
      .attr("y2", 20)
      .attr("stroke", "url(#track-gradient)")
      .attr("stroke-width", 3)
      .attr("stroke-linecap", "round");

    // Progress line up to activeIndex
    if (activeIndex > 0) {
      g.append("line")
        .attr("x1", 0)
        .attr("x2", xScale(activeIndex))
        .attr("y1", 20)
        .attr("y2", 20)
        .attr("stroke", "#fbbf24")
        .attr("stroke-width", 4)
        .attr("stroke-linecap", "round");
    }

    // Tick markers and click targets
    events.forEach((event, i) => {
      const cx = xScale(i);
      const isActive = i === activeIndex;
      const isPast = i < activeIndex;

      const nodeGroup = g
        .append("g")
        .attr("class", `d3-node ${isActive ? "active" : ""}`)
        .style("cursor", "pointer")
        .on("click", () => onSelectEvent(i));

      // Glow effect for active
      if (isActive) {
        nodeGroup
          .append("circle")
          .attr("cx", cx)
          .attr("cy", 20)
          .attr("r", 12)
          .attr("fill", "rgba(251, 191, 36, 0.25)")
          .attr("stroke", "rgba(217, 119, 6, 0.5)")
          .attr("stroke-width", 1.5);
      }

      // Main pin circle
      nodeGroup
        .append("circle")
        .attr("cx", cx)
        .attr("cy", 20)
        .attr("r", isActive ? 7 : 4)
        .attr("fill", isActive ? "#fbbf24" : isPast ? "#d97706" : "#52525b")
        .attr("stroke", "#0c0c0e")
        .attr("stroke-width", 2)
        .attr("transition", "all 0.2s ease");

      // Label (display for active or sparse landmarks)
      const showLabel =
        isActive ||
        i === 0 ||
        i === events.length - 1 ||
        event.id === "june16-0930" ||
        event.id === "docc-meeting-june13";

      if (showLabel) {
        nodeGroup
          .append("text")
          .attr("x", cx)
          .attr("y", 38)
          .attr("text-anchor", "middle")
          .attr("fill", isActive ? "#fbbf24" : "#a1a1aa")
          .attr("font-size", isActive ? "11px" : "9.5px")
          .attr("font-weight", isActive ? "700" : "500")
          .attr("font-family", "inherit")
          .text(event.year.slice(0, 14));
      }
    });
  }, [events, activeIndex, onSelectEvent]);

  return (
    <div className="d3-track-container" ref={containerRef}>
      <div className="d3-track-header">
        <span className="d3-track-label">CHRONOLOGICAL D3 TIMELINE SCRUBBER</span>
        <span className="d3-track-current">
          Milestone {activeIndex + 1} of {events.length} • {events[activeIndex]?.year}
        </span>
      </div>
      <svg ref={svgRef} className="d3-track-svg" />
    </div>
  );
}
