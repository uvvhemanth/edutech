import { useCourses } from "../context/CourseContext";

export default function Pagination({ totalPages }) {
  const { state, dispatch } = useCourses();
  const { page } = state;

  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  const btnStyle = (active) => ({
    width: 36, height: 36,
    border: `1.5px solid ${active ? "#7C6FF7" : "#E2DED5"}`,
    borderRadius: 9,
    background: active ? "#7C6FF7" : "#FFFFFF",
    color: active ? "#FFFFFF" : "#6B6760",
    fontFamily: "'Sora', sans-serif",
    fontSize: 13, fontWeight: active ? 700 : 400,
    cursor: active ? "default" : "pointer",
    transition: "all 0.15s",
    display: "flex", alignItems: "center", justifyContent: "center",
  });

  const arrowStyle = (disabled) => ({
    ...btnStyle(false),
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  });

  return (
    <div style={{
      display: "flex", justifyContent: "center",
      alignItems: "center", gap: 6,
      marginTop: "2rem", paddingTop: "1.5rem",
      borderTop: "1px solid #F0EDE8",
    }}>
      <button
        style={arrowStyle(page === 1)}
        disabled={page === 1}
        onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}
      >‹</button>

      {pages.map(p => (
        <button
          key={p}
          style={btnStyle(p === page)}
          onClick={() => dispatch({ type: "SET_PAGE", payload: p })}
        >
          {p}
        </button>
      ))}

      <button
        style={arrowStyle(page === totalPages)}
        disabled={page === totalPages}
        onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}
      >›</button>

      <span style={{ fontSize: 12, color: "#9E9A93", marginLeft: 8 }}>
        Page {page} of {totalPages}
      </span>
    </div>
  );
}
