import { useCourses } from "../context/CourseContext";
import { CATEGORIES, INSTRUCTORS, LEVELS } from "../data/courses";
import { useFilteredCourses } from "../hooks/useFilteredCourses";

const inputBase = {
  height: 40,
  padding: "0 14px",
  border: "1.5px solid #E2DED5",
  borderRadius: 10,
  background: "#FFFFFF",
  fontFamily: "'Sora', sans-serif",
  fontSize: 13,
  color: "#1A1814",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  width: "100%",
};

export default function FilterBar() {
  const { state, dispatch } = useCourses();
  const { totalCount } = useFilteredCourses();
  const hasFilters = state.search || state.category !== "All" || state.instructor !== "All" || state.level !== "All";

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1.5px solid #E2DED5",
      borderRadius: 16,
      padding: "1.1rem 1.25rem",
      marginBottom: "1.5rem",
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
    }}>
      {/* Search */}
      <div style={{ position: "relative", flex: "2", minWidth: 200 }}>
        <span style={{
          position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
          fontSize: 14, color: "#9E9A93", pointerEvents: "none",
        }}>⌕</span>
        <input
          type="text"
          placeholder="Search courses, instructors..."
          value={state.search}
          onChange={e => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          style={{ ...inputBase, paddingLeft: 32 }}
          onFocus={e => { e.target.style.borderColor = "#7C6FF7"; e.target.style.boxShadow = "0 0 0 3px rgba(124,111,247,0.12)"; }}
          onBlur={e => { e.target.style.borderColor = "#E2DED5"; e.target.style.boxShadow = "none"; }}
        />
      </div>

      {/* Category */}
      <select
        value={state.category}
        onChange={e => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}
        style={{ ...inputBase, flex: 1, minWidth: 140, cursor: "pointer" }}
      >
        {CATEGORIES.map(c => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
      </select>

      {/* Instructor */}
      <select
        value={state.instructor}
        onChange={e => dispatch({ type: "SET_INSTRUCTOR", payload: e.target.value })}
        style={{ ...inputBase, flex: 1, minWidth: 150, cursor: "pointer" }}
      >
        {INSTRUCTORS.map(i => <option key={i} value={i}>{i === "All" ? "All Instructors" : i}</option>)}
      </select>

      {/* Level */}
      <select
        value={state.level}
        onChange={e => dispatch({ type: "SET_LEVEL", payload: e.target.value })}
        style={{ ...inputBase, flex: 1, minWidth: 130, cursor: "pointer" }}
      >
        {LEVELS.map(l => <option key={l} value={l}>{l === "All" ? "All Levels" : l}</option>)}
      </select>

      {/* Result count + Reset */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
        <span style={{ fontSize: 12, color: "#9E9A93", whiteSpace: "nowrap" }}>
          {totalCount} result{totalCount !== 1 ? "s" : ""}
        </span>
        {hasFilters && (
          <button
            onClick={() => dispatch({ type: "RESET_FILTERS" })}
            style={{
              height: 36, padding: "0 14px",
              border: "1.5px solid #F0917A",
              borderRadius: 8,
              background: "#FEF0EC",
              color: "#C0431A",
              fontFamily: "'Sora', sans-serif",
              fontSize: 12, fontWeight: 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            ✕ Reset
          </button>
        )}
      </div>
    </div>
  );
}
