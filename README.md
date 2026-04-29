# Edutech Course Directory

A React.js frontend application displaying course data with filtering, sorting, and pagination.

## Tech Stack
- **React 18** (functional components + hooks)
- **Context API + useReducer** — global state management
- **Vite** — build tool & dev server
- **No CSS frameworks** — custom CSS-in-JS for full control
- **Mock API** — simulated async fetch with 900ms delay

## Features
- Live search (title, instructor, category)
- Filter by Category, Instructor, Level
- Sort by Name, Rating, Duration, Students, Price
- Pagination (6 courses per page)
- Loading skeleton states
- Error state handling
- Empty state (no results)
- Summary stats bar
- Animated card hover interactions
- Responsive grid layout

## Project Structure
```
src/
├── data/
│   └── courses.js          # Mock data + simulated fetchCourses()
├── context/
│   └── CourseContext.jsx   # Global state (Context API + useReducer)
├── hooks/
│   └── useFilteredCourses.js  # Filter/sort/paginate logic
├── utils/
│   └── styles.js           # Badge colors, formatters
├── components/
│   ├── FilterBar.jsx       # Search + dropdowns
│   ├── SortBar.jsx         # Sort toggle buttons
│   ├── CourseCard.jsx      # Individual course card
│   ├── Pagination.jsx      # Page navigation
│   ├── StatsBar.jsx        # Summary metrics
│   └── States.jsx          # Loading / Error / Empty states
└── App.jsx                 # Root layout
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## To swap in a real API
In `src/data/courses.js`, replace `fetchCourses()` with your real endpoint:
```js
export const fetchCourses = () =>
  fetch("https://your-api.com/courses").then(res => res.json());
```
