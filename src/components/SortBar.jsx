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
      <span style={{ fontSize: 11, color: "#555862", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
        Sort by
      </span>
      {SORT_OPTIONS.map(({ key, label }) => {
        const active = state.sortKey === key;
        return (
          <button
            key={key}
            onClick={() => dispatch({ type: "SET_SORT", payload: { key } })}
            style={{
              height: 32, padding: "0 13px",
              border: `1px solid ${active ? "#534AB7" : "#2A2D3A"}`,
              borderRadius: 8,
              background: active ? "#26215C" : "#12141C",
              color: active ? "#AFA9EC" : "#555862",
              fontFamily: "'Sora', sans-serif",
              fontSize: 12, fontWeight: active ? 700 : 400,
              cursor: "pointer",
              transition: "all 0.15s",
              display: "flex", alignItems: "center", gap: 4,
            }}
          >
            {label}
            {active && <span style={{ fontSize: 9 }}>{state.sortDir === "asc" ? "▲" : "▼"}</span>}
          </button>
        );
      })}
    </div>
  );
}
