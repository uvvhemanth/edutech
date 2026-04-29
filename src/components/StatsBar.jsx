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
    { label: "Total Courses", value: courses.length },
    { label: "Categories", value: categories },
    { label: "Avg Rating", value: avgRating },
    { label: "Total Students", value: formatStudents(totalStudents) },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: 10,
      marginBottom: "1.75rem",
    }}>
      {stats.map(({ label, value }) => (
        <div key={label} style={{
          background: "#FFFFFF",
          border: "1.5px solid #E2DED5",
          borderRadius: 14,
          padding: "0.85rem 1rem",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 22, fontWeight: 800,
            color: "#1A1814",
            fontFamily: "'Sora', sans-serif",
            lineHeight: 1,
          }}>
            {value}
          </div>
          <div style={{ fontSize: 11, color: "#9E9A93", marginTop: 4, fontWeight: 500 }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
