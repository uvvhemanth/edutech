import { useCourses } from "../context/CourseContext";

export default function Pagination({ totalPages }) {
  const { state, dispatch } = useCourses();
  const { page } = state;
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btn = (active) => ({
    width: 36, height: 36,
    border: `1px solid ${active ? "#534AB7" : "#2A2D3A"}`,
    borderRadius: 9,
    background: active ? "#534AB7" : "#12141C",
    color: active ? "#FFFFFF" : "#555862",
    fontFamily: "'Sora', sans-serif",
    fontSize: 13, fontWeight: active ? 700 : 400,
    cursor: active ? "default" : "pointer",
    transition: "all 0.15s",
    display: "flex", alignItems: "center", justifyContent: "center",
  });

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      gap: 6, marginTop: "2rem", paddingTop: "1.5rem",
      borderTop: "1px solid #2A2D3A",
    }}>
      <button style={{ ...btn(false), opacity: page === 1 ? 0.3 : 1, cursor: page === 1 ? "not-allowed" : "pointer" }}
        disabled={page === 1} onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}>‹</button>
      {pages.map(p => (
        <button key={p} style={btn(p === page)} onClick={() => dispatch({ type: "SET_PAGE", payload: p })}>{p}</button>
      ))}
      <button style={{ ...btn(false), opacity: page === totalPages ? 0.3 : 1, cursor: page === totalPages ? "not-allowed" : "pointer" }}
        disabled={page === totalPages} onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}>›</button>
      <span style={{ fontSize: 12, color: "#555862", marginLeft: 8 }}>Page {page} of {totalPages}</span>
    </div>
  );
}
