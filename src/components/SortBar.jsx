import { useCourses } from "../context/CourseContext";

const SORT_OPTIONS = [
  { key: "title",    label: "Name" },
  { key: "rating",   label: "Rating" },
  { key: "duration", label: "Duration" },
  { key: "students", label: "Students" },
  { key: "price",    label: "Price" },
];

export default function SortBar() {
  const { state, dispatch } = useCourses();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem", flexWrap: "wrap" }}>
      <span style={{ fontSize: 12, color: "#9E9A93", fontWeight: 500, letterSpacing: "0.4px" }}>SORT BY</span>
      {SORT_OPTIONS.map(({ key, label }) => {
        const active = state.sortKey === key;
        return (
          <button
            key={key}
            onClick={() => dispatch({ type: "SET_SORT", payload: { key } })}
            style={{
              height: 32, padding: "0 13px",
              border: `1.5px solid ${active ? "#7C6FF7" : "#E2DED5"}`,
              borderRadius: 8,
              background: active ? "#F0EFFE" : "#FFFFFF",
              color: active ? "#4B42C8" : "#6B6760",
              fontFamily: "'Sora', sans-serif",
              fontSize: 12, fontWeight: active ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
              display: "flex", alignItems: "center", gap: 4,
            }}
          >
            {label}
            {active && (
              <span style={{ fontSize: 9 }}>{state.sortDir === "asc" ? "▲" : "▼"}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
