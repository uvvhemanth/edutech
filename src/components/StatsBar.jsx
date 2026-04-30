import { useCourses } from "../context/CourseContext";
import { formatStudents } from "../utils/styles";

export default function StatsBar() {
  const { state } = useCourses();
  const { courses } = state;

  const totalStudents = courses.reduce((s, c) => s + c.students, 0);
  const avgRating = courses.length
    ? (courses.reduce((s, c) => s + c.rating, 0) / courses.length).toFixed(1)
    : "—";
  const categories = new Set(courses.map(c => c.category)).size;

  const stats = [
    { label: "Total Courses", value: courses.length, accent: "#7C6FF7" },
    { label: "Categories",    value: categories,       accent: "#1D9E75" },
    { label: "Avg Rating",    value: avgRating,         accent: "#F5A623" },
    { label: "Total Students",value: formatStudents(totalStudents), accent: "#378ADD" },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: 10, marginBottom: "1.5rem",
    }}>
      {stats.map(({ label, value, accent }) => (
        <div key={label} style={{
          background: "#12141C",
          border: "1px solid #2A2D3A",
          borderRadius: 12, padding: "0.9rem 1rem",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 2, background: accent, opacity: 0.7,
          }} />
          <div style={{
            fontSize: 24, fontWeight: 800, color: "#E8E5DD",
            fontFamily: "'Sora', sans-serif", lineHeight: 1,
          }}>
            {value}
          </div>
          <div style={{ fontSize: 11, color: "#555862", marginTop: 5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
