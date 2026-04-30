export function LoadingState() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{
          background: "#1A1D27", border: "1px solid #2A2D3A",
          borderRadius: 14, padding: "1.1rem",
          display: "flex", flexDirection: "column", gap: 10,
          animationDelay: `${i * 100}ms`,
          animation: "pulse 1.5s ease-in-out infinite",
        }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ height: 20, width: 80, borderRadius: 99, background: "#2A2D3A" }} />
            <div style={{ height: 20, width: 60, borderRadius: 99, background: "#2A2D3A" }} />
          </div>
          <div style={{ height: 14, width: "80%", borderRadius: 6, background: "#2A2D3A" }} />
          <div style={{ height: 12, width: "50%", borderRadius: 6, background: "#222535" }} />
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ height: 12, width: 40, borderRadius: 6, background: "#222535" }} />
            <div style={{ height: 12, width: 40, borderRadius: 6, background: "#222535" }} />
          </div>
          <div style={{ height: 1, background: "#2A2D3A" }} />
          <div style={{ height: 12, width: 70, borderRadius: 6, background: "#2A2D3A" }} />
        </div>
      ))}
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
}

export function ErrorState({ message }) {
  return (
    <div style={{
      textAlign: "center", padding: "4rem 2rem",
      background: "#1A0D0D", border: "1px solid #501313", borderRadius: 14,
    }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#F09595", fontFamily: "'Sora',sans-serif", marginBottom: 8 }}>
        Failed to load courses
      </h3>
      <p style={{ fontSize: 13, color: "#8A4040" }}>{message || "Something went wrong. Please try again."}</p>
    </div>
  );
}

export function EmptyState() {
  return (
    <div style={{
      textAlign: "center", padding: "4rem 2rem",
      background: "#12141C", border: "1px dashed #2A2D3A", borderRadius: 14,
    }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#E8E5DD", fontFamily: "'Sora',sans-serif", marginBottom: 8 }}>
        No courses found
      </h3>
      <p style={{ fontSize: 13, color: "#555862" }}>Try adjusting your filters or search term.</p>
    </div>
  );
}
