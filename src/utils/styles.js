export const CATEGORY_STYLES = {
  "Programming":      { bg: "#EEEDFE", text: "#3C3489", accent: "#534AB7" },
  "Cloud":            { bg: "#E1F5EE", text: "#085041", accent: "#1D9E75" },
  "Security":         { bg: "#FCEBEB", text: "#791F1F", accent: "#E24B4A" },
  "Computer Science": { bg: "#E6F1FB", text: "#0C447C", accent: "#378ADD" },
  "Database":         { bg: "#FAEEDA", text: "#633806", accent: "#BA7517" },
  "Web Development":  { bg: "#FBEAF0", text: "#72243E", accent: "#D4537E" },
  "AI/ML":            { bg: "#EAF3DE", text: "#173404", accent: "#639922" },
  "Design":           { bg: "#F1EFE8", text: "#2C2C2A", accent: "#888780" },
};

export const LEVEL_STYLES = {
  "Beginner":     { bg: "#E1F5EE", text: "#085041" },
  "Intermediate": { bg: "#FAEEDA", text: "#633806" },
  "Advanced":     { bg: "#FCEBEB", text: "#791F1F" },
};

export function getCategoryStyle(cat) {
  return CATEGORY_STYLES[cat] || { bg: "#F1EFE8", text: "#444441", accent: "#888780" };
}

export function getLevelStyle(level) {
  return LEVEL_STYLES[level] || { bg: "#F1EFE8", text: "#444441" };
}

export function formatStudents(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}
