import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/_navBar.scss";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useState } from "react";

const NavBar = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`navbar ${theme}`}>
      
      {/* Left: Logo */}
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          CF
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className={`navbar-center desktop`}>
        <NavLink to="/" end>{t("nav.home")}</NavLink>
        <NavLink to="/projects">{t("nav.projects")}</NavLink>
        <NavLink to="/contact">{t("nav.contact")}</NavLink>
      </div>

      <div className={`navbar-right desktop`}>
        <a href="https://github.com/candelariaferrari" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/candelariaferrari/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>
          {t("nav.home")}
        </NavLink>
        <NavLink to="/projects" onClick={() => setOpen(false)}>
          {t("nav.projects")}
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          {t("nav.contact")}
        </NavLink>

        <div className="mobile-options">
          <ThemeToggle />
          <LanguageToggle />
          <a href="https://github.com/candelariaferrari" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/candelariaferrari/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
