import React, { useState, useEffect } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">Darshan G</div>
        <div className="nav-center">
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <a
            className="resume-btn"
            href="/DarshanFinalResume.pdf"
            download="Darshan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📥 Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
