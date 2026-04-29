export function LoadingState() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 14,
    }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #E2DED5",
            borderRadius: 18,
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            animationDelay: `${i * 100}ms`,
            animation: "pulse 1.4s ease-in-out infinite",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ height: 22, width: 90, borderRadius: 99, background: "#F0EDE8" }} />
            <div style={{ height: 22, width: 70, borderRadius: 99, background: "#F0EDE8" }} />
          </div>
          <div style={{ height: 16, width: "85%", borderRadius: 6, background: "#F0EDE8" }} />
          <div style={{ height: 13, width: "55%", borderRadius: 6, background: "#F5F3F0" }} />
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ height: 13, width: 50, borderRadius: 6, background: "#F5F3F0" }} />
            <div style={{ height: 13, width: 50, borderRadius: 6, background: "#F5F3F0" }} />
          </div>
          <div style={{ height: 1, background: "#F0EDE8" }} />
          <div style={{ height: 13, width: 80, borderRadius: 6, background: "#F0EDE8" }} />
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export function ErrorState({ message }) {
  return (
    <div style={{
      textAlign: "center", padding: "4rem 2rem",
      background: "#FFF4F2",
      border: "1.5px solid #F5C0B0",
      borderRadius: 18,
    }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
      <h3 style={{
        fontSize: 18, fontWeight: 700,
        color: "#8B2A1A", fontFamily: "'Sora', sans-serif",
        marginBottom: 8,
      }}>
        Failed to load courses
      </h3>
      <p style={{ fontSize: 14, color: "#B04030" }}>
        {message || "Something went wrong. Please try again."}
      </p>
    </div>
  );
}

export function EmptyState() {
  return (
    <div style={{
      textAlign: "center", padding: "4rem 2rem",
      background: "#FAFAF8",
      border: "1.5px dashed #D8D4CD",
      borderRadius: 18,
    }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
      <h3 style={{
        fontSize: 18, fontWeight: 700,
        color: "#3A3730", fontFamily: "'Sora', sans-serif",
        marginBottom: 8,
      }}>
        No courses found
      </h3>
      <p style={{ fontSize: 14, color: "#7A7670" }}>
        Try adjusting your filters or search term.
      </p>
    </div>
  );
}
