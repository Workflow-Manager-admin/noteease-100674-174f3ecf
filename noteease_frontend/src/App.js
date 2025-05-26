import React from "react";
import "./App.css";
import "./MainContainer.css"; // Import glassy and theme styles
import { ThemeProvider, MainContainer, FloatingActionButton } from "./MainContainer";

// Dummy notes list for initial view
const initialNotes = [
  { id: 1, title: "Welcome to NoteEase", snippet: "Start by clicking the + button to add a note." },
];

/**
 * PUBLIC_INTERFACE
 * Main app container for NoteEase, with glassy UI and theme support.
 */
function App() {
  const [notes, setNotes] = React.useState(initialNotes);
  const { theme, toggleTheme } = React.useContext(
    // To avoid extra render: use ThemeProvider below so useContext works.
    React.createContext({ theme: "dark", toggleTheme: () => {} })
  );

  // Handler for FAB click
  const handleAddNote = () => {
    // Placeholder: add a sample note for now
    setNotes((n) => [
      ...n,
      { id: Date.now(), title: "New Note", snippet: "Write something awesome!" }
    ]);
  };

  // Place ThemeProvider here so theme context available in the tree.
  return (
    <ThemeProvider>
      <div className="app">
        <nav className="navbar">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div className="logo">
              <span className="logo-symbol">*</span>
              NoteEase
            </div>
            {/* Theme toggle button */}
            <button className="btn" style={{ minWidth: 90 }} onClick={toggleTheme}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>

        <main>
          <MainContainer>
            {/* Placeholder for notes UI */}
            <div>
              <h2 style={{ marginBottom: 14 }}>Your Notes</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {notes.map((n) => (
                  <li
                    key={n.id}
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(245,166,35,0.08))",
                      borderRadius: "8px",
                      padding: "1rem",
                      marginBottom: "1.1rem",
                      boxShadow:
                        "0 1px 6px rgba(230,145,65,0.07)"
                    }}
                  >
                    <strong>{n.title}</strong>
                    <div style={{ fontSize: '0.96rem', color: 'var(--text-secondary)' }}>
                      {n.snippet}
                    </div>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 18, color: "var(--text-secondary)" }}>
                <em>Add, edit, search, and organize notes with NoteEase.</em>
              </p>
            </div>
          </MainContainer>
          <FloatingActionButton onClick={handleAddNote} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;