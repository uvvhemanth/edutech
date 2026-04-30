import { useState } from "react";
import { getCategoryStyle, getLevelStyle, formatStudents } from "../utils/styles";

function StarRow({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ color: "#F5A623", fontSize: 12, letterSpacing: 1 }}>
        {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
      </span>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#8A7040" }}>{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CourseCard({ course, index }) {
  const [hovered, setHovered] = useState(false);
  const cat = getCategoryStyle(course.category);
  const lvl = getLevelStyle(course.level);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1A1D27",
        border: `1px solid ${hovered ? cat.bar : "#2A2D3A"}`,
        borderRadius: 14,
        padding: "1.1rem 1.1rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
        boxShadow: hovered ? `0 0 0 1px ${cat.bar}44, 0 8px 28px rgba(0,0,0,0.4)` : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
        animationDelay: `${index * 55}ms`,
        animation: "fadeUp 0.4s ease both",
      }}
    >
      {/* Top color bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: cat.bar,
        opacity: hovered ? 1 : 0.5,
        transition: "opacity 0.2s",
      }} />

      {/* Badges */}
      <div style={{ display: "flex", gap: 6, marginBottom: 10, marginTop: 4 }}>
        <span style={{
          fontSize: 10, fontWeight: 600, padding: "2px 9px", borderRadius: 99,
          background: cat.badgeBg, color: cat.badgeText, letterSpacing: "0.3px",
        }}>
          {course.category}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 500, padding: "2px 9px", borderRadius: 99,
          background: "#12141C", color: "#555862",
          border: `1px solid ${lvl.border}`,
        }}>
          {course.level}
        </span>
      </div>

      {/* Title + instructor */}
      <h3 style={{
        fontSize: 13.5, fontWeight: 700, color: "#E8E5DD",
        lineHeight: 1.35, fontFamily: "'Sora', sans-serif", margin: 0,
      }}>
        {course.title}
      </h3>
      <p style={{ fontSize: 11.5, color: "#555862", marginTop: 4, marginBottom: 10 }}>
        by {course.instructor}
      </p>

      {/* Stats */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        fontSize: 11.5, color: "#555862", marginBottom: 10,
      }}>
        <span>⏱ {course.duration}w</span>
        <span>👥 {formatStudents(course.students)}</span>
        <span style={{ marginLeft: "auto", fontWeight: 800, fontSize: 14, color: cat.price }}>
          ${course.price}
        </span>
      </div>

      {/* Divider + rating */}
      <div style={{ borderTop: "1px solid #2A2D3A", paddingTop: 9, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <StarRow rating={course.rating} />
        <span style={{
          fontSize: 11, fontWeight: 600, color: cat.bar,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-5px)",
          transition: "opacity 0.15s, transform 0.15s",
        }}>
          Enroll →
        </span>
      </div>
    </div>
  );
}
