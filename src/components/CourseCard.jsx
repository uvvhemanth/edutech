import { useState } from "react";
import { getCategoryStyle, getLevelStyle, formatStudents } from "../utils/styles";

function StarRow({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span style={{ color: "#F5A623", fontSize: 12, letterSpacing: 1 }}>
        {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
      </span>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#C07A10" }}>{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CourseCard({ course, index }) {
  const [hovered, setHovered] = useState(false);
  const catStyle = getCategoryStyle(course.category);
  const lvlStyle = getLevelStyle(course.level);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FFFFFF",
        border: `1.5px solid ${hovered ? catStyle.accent : "#E2DED5"}`,
        borderRadius: 18,
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: hovered
          ? `0 12px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05), 0 0 0 1px ${catStyle.accent}22`
          : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        animationDelay: `${index * 55}ms`,
        animation: "fadeUp 0.45s ease both",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top color stripe */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3, background: catStyle.accent,
        borderRadius: "18px 18px 0 0",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.2s",
      }} />

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <span style={{
          fontSize: 11, fontWeight: 600,
          padding: "3px 10px", borderRadius: 99,
          background: catStyle.bg, color: catStyle.text,
          letterSpacing: "0.2px", whiteSpace: "nowrap",
        }}>
          {course.category}
        </span>
        <span style={{
          fontSize: 11, fontWeight: 500,
          padding: "3px 10px", borderRadius: 99,
          background: lvlStyle.bg, color: lvlStyle.text,
          whiteSpace: "nowrap",
        }}>
          {course.level}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 style={{
          fontSize: 15, fontWeight: 700,
          color: "#1A1814", lineHeight: 1.35,
          fontFamily: "'Sora', sans-serif",
        }}>
          {course.title}
        </h3>
        <p style={{ fontSize: 12.5, color: "#7A7670", marginTop: 4 }}>
          by {course.instructor}
        </p>
      </div>

      {/* Stats row */}
      <div style={{
        display: "flex", gap: 12, fontSize: 12, color: "#9E9A93",
      }}>
        <span title="Duration">🕐 {course.duration}w</span>
        <span title="Students">👥 {formatStudents(course.students)}</span>
        <span title="Price" style={{ marginLeft: "auto", fontWeight: 700, color: catStyle.accent, fontSize: 14 }}>
          ${course.price}
        </span>
      </div>

      {/* Rating + CTA */}
      <div style={{
        paddingTop: 10, borderTop: "1px solid #F0EDE8",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <StarRow rating={course.rating} />
        <span style={{
          fontSize: 12, fontWeight: 600,
          color: catStyle.accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.18s, transform 0.18s",
        }}>
          Enroll now →
        </span>
      </div>
    </div>
  );
}
