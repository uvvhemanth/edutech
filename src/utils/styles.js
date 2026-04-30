export const CATEGORY_STYLES = {
  "Programming":      { bar: "#534AB7", badgeBg: "#26215C", badgeText: "#AFA9EC", price: "#7C6FF7" },
  "Cloud":            { bar: "#1D9E75", badgeBg: "#04342C", badgeText: "#5DCAA5", price: "#1D9E75" },
  "Security":         { bar: "#E24B4A", badgeBg: "#501313", badgeText: "#F09595", price: "#E24B4A" },
  "Computer Science": { bar: "#378ADD", badgeBg: "#042C53", badgeText: "#85B7EB", price: "#378ADD" },
  "Database":         { bar: "#BA7517", badgeBg: "#412402", badgeText: "#EF9F27", price: "#BA7517" },
  "Web Development":  { bar: "#D4537E", badgeBg: "#4B1528", badgeText: "#ED93B1", price: "#D4537E" },
  "AI/ML":            { bar: "#639922", badgeBg: "#173404", badgeText: "#97C459", price: "#639922" },
  "Design":           { bar: "#888780", badgeBg: "#2C2C2A", badgeText: "#B4B2A9", price: "#888780" },
};

export function getCategoryStyle(cat) {
  return CATEGORY_STYLES[cat] || CATEGORY_STYLES["Programming"];
}

export function getLevelStyle() {
  return { bg: "#1A1D27", text: "#555862", border: "#2A2D3A" };
}

export function formatStudents(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}
