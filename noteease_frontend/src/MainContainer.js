import React, { useState, createContext, useContext } from "react";
import "./MainContainer.css";

// Theme context for light/dark toggle
const ThemeContext = createContext();

/**
 * PUBLIC_INTERFACE
 * Provides theme context (light/dark) to children.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  // Toggle between light and dark themes
  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * Glassy main content container with optional children; applies theme.
 */
export function MainContainer({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`noteease-main-container glassy ${theme}`}>
      {children}
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Floating Action Button for adding new note.
 * @param {function} onClick - Handler when button is clicked.
 */
export function FloatingActionButton({ onClick }) {
  return (
    <button
      className="floating-action-btn"
      aria-label="Add new note"
      title="Add new note"
      onClick={onClick}
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 30 30">
        <circle cx="15" cy="15" r="15" fill="var(--fab-accent)"/>
        <path d="M15 8v14M8 15h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </button>
  );
}
