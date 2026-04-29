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

  return (
    <div style={{
      fontFamily: "'Sora', sans-serif",
      background: "#F5F3EE",
      minHeight: "100vh",
      padding: "2.5rem 1.5rem 5rem",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        select { appearance: none; -webkit-appearance: none; cursor: pointer; }
        select:focus { outline: none; border-color: #7C6FF7 !important; box-shadow: 0 0 0 3px rgba(124,111,247,0.12); }
      `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "2rem",
          flexWrap: "wrap", gap: 12,
        }}>
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "2px",
              color: "#7C6FF7", textTransform: "uppercase", marginBottom: 6,
            }}>
              ✦ Learning Platform
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#1A1814",
              lineHeight: 1.1,
            }}>
              Course Directory
            </h1>
            <p style={{ fontSize: 14, color: "#7A7670", marginTop: 6 }}>
              Discover {state.courses.length} courses across {new Set(state.courses.map(c => c.category)).size} categories
            </p>
          </div>

          <div style={{
            background: "#7C6FF7",
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: 12,
            fontSize: 13, fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.2px",
          }}>
            + Browse All
          </div>
        </div>

        {/* Stats */}
        {!state.loading && !state.error && <StatsBar />}

        {/* Filters */}
        <FilterBar />

        {/* Sort */}
        {!state.loading && !state.error && <SortBar />}

        {/* Content */}
        {state.loading ? (
          <LoadingState />
        ) : state.error ? (
          <ErrorState message={state.error} />
        ) : paginated.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 14,
            }}>
              {paginated.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>

            <Pagination totalPages={totalPages} />

            <p style={{
              textAlign: "center", fontSize: 12, color: "#B0ACA5",
              marginTop: "1rem",
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
