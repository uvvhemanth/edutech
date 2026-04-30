import { useCourses } from "../context/CourseContext";
import { CATEGORIES, INSTRUCTORS, LEVELS } from "../data/courses";
import { useFilteredCourses } from "../hooks/useFilteredCourses";

const darkInput = {
  height: 40,
  padding: "0 14px",
  border: "1px solid #2A2D3A",
  borderRadius: 10,
  background: "#12141C",
  fontFamily: "'Sora', sans-serif",
  fontSize: 13,
  color: "#CCC9C0",
  outline: "none",
  width: "100%",
  transition: "border-color 0.15s, box-shadow 0.15s",
};

export default function FilterBar() {
  const { state, dispatch } = useCourses();
  const { totalCount } = useFilteredCourses();
  const hasFilters =
    state.search || state.category !== "All" || state.instructor !== "All" || state.level !== "All";

  return (
    <div style={{
      background: "#12141C",
      border: "1px solid #2A2D3A",
      borderRadius: 14,
      padding: "1rem 1.25rem",
      marginBottom: "1.25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
    }}>
      {/* Search */}
      <div style={{ position: "relative", flex: "2", minWidth: 200 }}>
        <span style={{
          position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
          fontSize: 14, color: "#555862", pointerEvents: "none",
        }}>⌕</span>
        <input
          type="text"
          placeholder="Search courses, instructors..."
          value={state.search}
          onChange={e => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          style={{ ...darkInput, paddingLeft: 32 }}
          onFocus={e => { e.target.style.borderColor = "#534AB7"; e.target.style.boxShadow = "0 0 0 3px rgba(83,74,183,0.15)"; }}
          onBlur={e => { e.target.style.borderColor = "#2A2D3A"; e.target.style.boxShadow = "none"; }}
        />
      </div>

      <select value={state.category} onChange={e => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}
        style={{ ...darkInput, flex: 1, minWidth: 140, cursor: "pointer" }}>
        {CATEGORIES.map(c => <option key={c} value={c} style={{ background: "#1A1D27" }}>{c === "All" ? "All Categories" : c}</option>)}
      </select>

      <select value={state.instructor} onChange={e => dispatch({ type: "SET_INSTRUCTOR", payload: e.target.value })}
        style={{ ...darkInput, flex: 1, minWidth: 150, cursor: "pointer" }}>
        {INSTRUCTORS.map(i => <option key={i} value={i} style={{ background: "#1A1D27" }}>{i === "All" ? "All Instructors" : i}</option>)}
      </select>

      <select value={state.level} onChange={e => dispatch({ type: "SET_LEVEL", payload: e.target.value })}
        style={{ ...darkInput, flex: 1, minWidth: 120, cursor: "pointer" }}>
        {LEVELS.map(l => <option key={l} value={l} style={{ background: "#1A1D27" }}>{l === "All" ? "All Levels" : l}</option>)}
      </select>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
        <span style={{ fontSize: 12, color: "#555862", whiteSpace: "nowrap" }}>
          {totalCount} result{totalCount !== 1 ? "s" : ""}
        </span>
        {hasFilters && (
          <button onClick={() => dispatch({ type: "RESET_FILTERS" })} style={{
            height: 36, padding: "0 14px",
            border: "1px solid #501313",
            borderRadius: 8,
            background: "#2A1212",
            color: "#F09595",
            fontFamily: "'Sora', sans-serif",
            fontSize: 12, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap",
          }}>✕ Reset</button>
        )}
      </div>
    </div>
  );
}
