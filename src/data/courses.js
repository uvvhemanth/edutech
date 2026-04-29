export const COURSES = [
  { id: 1,  title: "Advanced JavaScript",           instructor: "Jane Smith",      duration: 6,  category: "Programming",      rating: 4.8, students: 3420, level: "Advanced",     price: 49 },
  { id: 2,  title: "Cloud Computing Fundamentals",  instructor: "Henry Anderson",  duration: 8,  category: "Cloud",            rating: 4.5, students: 2100, level: "Beginner",     price: 39 },
  { id: 3,  title: "Cybersecurity Essentials",      instructor: "Frank Miller",    duration: 9,  category: "Security",         rating: 4.9, students: 5800, level: "Intermediate", price: 59 },
  { id: 4,  title: "Data Structures & Algorithms",  instructor: "Bob Johnson",     duration: 8,  category: "Computer Science", rating: 4.2, students: 1980, level: "Advanced",     price: 45 },
  { id: 5,  title: "Database Management",           instructor: "Eve Garcia",      duration: 7,  category: "Database",         rating: 4.4, students: 2750, level: "Intermediate", price: 35 },
  { id: 6,  title: "Introduction to React",         instructor: "John Doe",        duration: 4,  category: "Web Development",  rating: 4.7, students: 6120, level: "Beginner",     price: 29 },
  { id: 7,  title: "Machine Learning Basics",       instructor: "Alice Wang",      duration: 10, category: "AI/ML",            rating: 4.6, students: 4300, level: "Intermediate", price: 69 },
  { id: 8,  title: "DevOps & CI/CD Pipelines",      instructor: "Sam Torres",      duration: 6,  category: "Cloud",            rating: 4.3, students: 1650, level: "Advanced",     price: 55 },
  { id: 9,  title: "Python for Data Science",       instructor: "Linda Chen",      duration: 12, category: "AI/ML",            rating: 4.8, students: 7800, level: "Beginner",     price: 49 },
  { id: 10, title: "UI/UX Design Principles",       instructor: "Marco Rossi",     duration: 5,  category: "Design",           rating: 4.5, students: 3100, level: "Beginner",     price: 39 },
  { id: 11, title: "Node.js & Express APIs",        instructor: "Jane Smith",      duration: 7,  category: "Web Development",  rating: 4.6, students: 2890, level: "Intermediate", price: 45 },
  { id: 12, title: "Kubernetes & Docker",           instructor: "Henry Anderson",  duration: 8,  category: "Cloud",            rating: 4.4, students: 1420, level: "Advanced",     price: 65 },
  { id: 13, title: "Ethical Hacking",               instructor: "Frank Miller",    duration: 11, category: "Security",         rating: 4.7, students: 3900, level: "Advanced",     price: 79 },
  { id: 14, title: "React Native Mobile Dev",       instructor: "John Doe",        duration: 8,  category: "Web Development",  rating: 4.5, students: 2200, level: "Intermediate", price: 55 },
  { id: 15, title: "Deep Learning & Neural Nets",   instructor: "Alice Wang",      duration: 14, category: "AI/ML",            rating: 4.9, students: 5100, level: "Advanced",     price: 89 },
  { id: 16, title: "PostgreSQL Mastery",            instructor: "Eve Garcia",      duration: 6,  category: "Database",         rating: 4.3, students: 1300, level: "Intermediate", price: 35 },
  { id: 17, title: "Figma for Developers",          instructor: "Marco Rossi",     duration: 3,  category: "Design",           rating: 4.6, students: 4500, level: "Beginner",     price: 25 },
  { id: 18, title: "System Design Interviews",      instructor: "Bob Johnson",     duration: 9,  category: "Computer Science", rating: 4.8, students: 6700, level: "Advanced",     price: 69 },
];

export const CATEGORIES = ["All", ...Array.from(new Set(COURSES.map(c => c.category))).sort()];
export const INSTRUCTORS = ["All", ...Array.from(new Set(COURSES.map(c => c.instructor))).sort()];
export const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

// Simulates an async API fetch with artificial delay
export const fetchCourses = () =>
  new Promise((resolve) => setTimeout(() => resolve(COURSES), 900));
