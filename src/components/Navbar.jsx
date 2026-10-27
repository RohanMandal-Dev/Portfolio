import { useEffect, useState } from "react";

import {
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Rohan<span>.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? "active" : ""
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* GitHub Social Link */}
        <div className="nav-socials">
          <a
            href="https://github.com/RohanMandal-Dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id ? "active" : ""
            }
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        {/* GitHub link in mobile menu */}
        <a
          href="https://github.com/RohanMandal-Dev"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <FaGithub /> GitHub Profile
        </a>
      </div>
    </nav>
  );
}

export default Navbar;