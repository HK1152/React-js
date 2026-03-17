// Inline SVG Icon Library — Lucide-style, stroke-based, zero dependencies
// Usage: <Icon name="users" size={18} color="currentColor" />

const paths = {
  dashboard:       "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  users:           "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0",
  calendar:        "M3 4h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M16 2v4 M8 2v4 M1 10h22",
  umbrella:        "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7",
  banknote:        "M2 7h20v14H2z M6 11h2v6H6z M11 11h2v6h-2z M16 11h2v6h-2z M2 3h20v4H2z",
  "bar-chart":     "M12 20V10 M18 20V4 M6 20v-4",
  settings:        "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  bell:            "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0",
  search:          "M11 19m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0 M21 21l-4.35-4.35",
  logout:          "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
  eye:             "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M15 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0",
  "eye-off":       "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24 M1 1l22 22",
  edit:            "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
  trash:           "M3 6h18 M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6 M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
  plus:            "M12 5v14 M5 12h14",
  x:               "M18 6 6 18 M6 6l12 12",
  check:           "M20 6 9 17l-5-5",
  "check-circle":  "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3",
  "x-circle":      "M12 22m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0 M15 9l-6 6 M9 9l6 6",
  clock:           "M12 22m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0 M12 6v6l4 2",
  "map-pin":       "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M15 10m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0",
  mail:            "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
  phone:           "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.75-2.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
  building:        "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4",
  user:            "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0",
  "chevron-down":  "M6 9l6 6 6-6",
  "chevron-left":  "M15 18l-6-6 6-6",
  "chevron-right": "M9 18l6-6-6-6",
  "chevron-up":    "M18 15l-6-6-6 6",
  filter:          "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
  download:        "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
  upload:          "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
  shield:          "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  lock:            "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
  globe:           "M12 22m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0 M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  alert:           "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01",
  info:            "M12 22m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0 M12 8h.01 M12 12v4",
  "trending-up":   "M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6",
  "trending-down": "M23 18l-9.5-9.5-5 5L1 6 M17 18h6v-6",
  activity:        "M22 12h-4l-3 9L9 3l-3 9H2",
  star:            "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  award:           "M12 15m-7 0a7 7 0 1 0 14 0 7 7 0 1 0-14 0 M8.21 13.89L7 23l5-3 5 3-1.21-9.12",
  "pie-chart":     "M21.21 15.89A10 10 0 1 1 8 2.83 M22 12A10 10 0 0 0 12 2v10z",
  briefcase:       "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
  "more-vertical": "M12 5h.01 M12 12h.01 M12 19h.01",
  "more-horizontal":"M5 12h.01 M12 12h.01 M19 12h.01",
  refresh:         "M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
  send:            "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
  "file-text":     "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  "log-in":        "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4 M10 17l5-5-5-5 M15 12H3",
  "arrow-right":   "M5 12h14 M12 5l7 7-7 7",
  "arrow-left":    "M19 12H5 M12 19l-7-7 7-7",
  "arrow-up":      "M12 19V5 M5 12l7-7 7 7",
  "arrow-down":    "M12 5v14 M19 12l-7 7-7-7",
  zap:             "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  layers:          "M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z M12 22V9 M22 8.5L12 15 2 8.5",
  target:          "M12 22m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0 M12 18m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0 M12 14m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0",
  cpu:             "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  "dollar-sign":   "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  percent:         "M19 5L5 19 M6.5 6.5m-.5 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0 M17.5 17.5m-.5 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0",
  copy:            "M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
  "grid":          "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
  list:            "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01",
  sun:             "M12 17m-5 0a5 5 0 1 0 10 0 5 5 0 1 0-10 0 M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42",
  moon:            "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  minimize:        "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3",
};

export function Icon({ name, size = 18, color = "currentColor", strokeWidth = 1.8, className = "", style = {} }) {
  const d = paths[name];
  if (!d) return <span style={{ display: "inline-block", width: size, height: size }} />;

  // Split compound paths by M (keep M at start of each segment)
  const segments = d.split(/(?= M)/g).map(s => s.trim()).filter(Boolean);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flexShrink: 0, display: "inline-block", verticalAlign: "middle", ...style }}
      aria-hidden="true"
    >
      {segments.map((seg, i) => <path key={i} d={seg} />)}
    </svg>
  );
}

// Convenience wrappers
export const Ic = Icon;
export default Icon;
