import { CourseProvider, useCourses } from "./context/CourseContext";
import { useFilteredCourses } from "./hooks/useFilteredCourses";
import FilterBar from "./components/FilterBar";
import SortBar from "./components/SortBar";
import CourseCard from "./components/CourseCard";
import Pagination from "./components/Pagination";
import StatsBar from "./components/StatsBar";
import { LoadingState, ErrorState, EmptyState } from "./components/States";

function Directory() {
  const { state } = useCourses();
  const { paginated, totalPages, totalCount } = useFilteredCourses();
  const totalCats = new Set(state.courses.map(c => c.category)).size;

  return (
    <div style={{
      fontFamily: "'Sora', sans-serif",
      background: "#0F1117",
      minHeight: "100vh",
      padding: "2.5rem 1.5rem 5rem",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        select { appearance: none; -webkit-appearance: none; cursor: pointer; }
        select:focus { outline: none; border-color: #534AB7 !important; box-shadow: 0 0 0 3px rgba(83,74,183,0.15) !important; }
        input::placeholder { color: #555862; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #12141C; }
        ::-webkit-scrollbar-thumb { background: #2A2D3A; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #534AB7; }
      `}</style>

      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "2rem", flexWrap: "wrap", gap: 12,
        }}>
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "2.5px",
              color: "#534AB7", textTransform: "uppercase", marginBottom: 8,
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{
                display: "inline-block", width: 6, height: 6,
                borderRadius: "50%", background: "#534AB7",
                boxShadow: "0 0 8px #534AB7",
              }} />
              Learning Platform
            </p>
            <h1 style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#E8E5DD",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}>
              Course Directory
            </h1>
            <p style={{ fontSize: 13, color: "#555862", marginTop: 8 }}>
              Discover {state.courses.length} courses across {totalCats} categories
            </p>
          </div>

          <button style={{
            background: "linear-gradient(135deg, #534AB7, #7C6FF7)",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 22px",
            borderRadius: 10,
            fontSize: 13, fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Sora', sans-serif",
            letterSpacing: "0.2px",
            boxShadow: "0 4px 20px rgba(83,74,183,0.4)",
          }}>
            + Browse All
          </button>
        </div>

        {/* ── Stats ── */}
        {!state.loading && !state.error && <StatsBar />}

        {/* ── Filters ── */}
        <FilterBar />

        {/* ── Sort ── */}
        {!state.loading && !state.error && <SortBar />}

        {/* ── Grid ── */}
        {state.loading ? <LoadingState /> :
         state.error   ? <ErrorState message={state.error} /> :
         paginated.length === 0 ? <EmptyState /> : (
          <>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12,
            }}>
              {paginated.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>

            <Pagination totalPages={totalPages} />

            <p style={{
              textAlign: "center", fontSize: 12, color: "#3A3D4A",
              marginTop: "1.25rem",
            }}>
              Showing {paginated.length} of {totalCount} courses
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CourseProvider>
      <Directory />
    </CourseProvider>
  );
}
