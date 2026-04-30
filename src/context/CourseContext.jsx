import { createContext, useContext, useReducer, useEffect } from "react";
import { fetchCourses } from "../data/courses";

const CourseContext = createContext(null);

const initialState = {
  courses: [],
  loading: true,
  error: null,
  search: "",
  category: "All",
  instructor: "All",
  level: "All",
  sortKey: "title",
  sortDir: "asc",
  page: 1,
  pageSize: 6,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, courses: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_SEARCH":
      return { ...state, search: action.payload, page: 1 };
    case "SET_CATEGORY":
      return { ...state, category: action.payload, page: 1 };
    case "SET_INSTRUCTOR":
      return { ...state, instructor: action.payload, page: 1 };
    case "SET_LEVEL":
      return { ...state, level: action.payload, page: 1 };
    case "SET_SORT":
      return {
        ...state,
        sortKey: action.payload.key,
        sortDir:
          state.sortKey === action.payload.key
            ? state.sortDir === "asc" ? "desc" : "asc"
            : "asc",
        page: 1,
      };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "RESET_FILTERS":
      return { ...state, search: "", category: "All", instructor: "All", level: "All", page: 1 };
    default:
      return state;
  }
}

export function CourseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchCourses()
      .then(data => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch(err => dispatch({ type: "FETCH_ERROR", payload: err.message }));
  }, []);

  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  return useContext(CourseContext);
}
