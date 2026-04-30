import { useMemo } from "react";
import { useCourses } from "../context/CourseContext";

export function useFilteredCourses() {
  const { state } = useCourses();
  const { courses, search, category, instructor, level, sortKey, sortDir, page, pageSize } = state;

  const filtered = useMemo(() => {
    let list = [...courses];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }
    if (category !== "All") list = list.filter(c => c.category === category);
    if (instructor !== "All") list = list.filter(c => c.instructor === instructor);
    if (level !== "All") list = list.filter(c => c.level === level);

    list.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      if (typeof av === "string")
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortDir === "asc" ? av - bv : bv - av;
    });

    return list;
  }, [courses, search, category, instructor, level, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return { filtered, paginated, totalPages, totalCount: filtered.length };
}
