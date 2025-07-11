/* import { NavLink } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import LanguageToggle from "./LanguageToggle";
import "../styles/_navBar.scss";

function Navbar() {

  return (
    <nav className="nav-wrapper dark-nav">
      <div className="container">
        <NavLink to="/">
          <div className="logo left" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="logo-circle">CF</div>
            <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>Candelaria Ferrari</span>
          </div>
        </NavLink>

        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Proyectos</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contacto</NavLink></li>
          <li><ThemeToggle /></li>
          <LanguageToggle />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
 */

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/_navBar.scss";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          CF
        </NavLink>

      </div>

      <div className="navbar-center">
        <NavLink to="/" end>{t("nav.home")}</NavLink>
        <NavLink to="/projects">{t("nav.projects")}</NavLink>
        <NavLink to="/contact">{t("nav.contact")}</NavLink>
      </div>

      <div className="navbar-right">
        <a href="https://github.com/candelariaferrari" target="_blank" rel="noreferrer">
          <FaGithub color={theme === "dark" ? "white" : "black"} />
        </a>
        <a href="https://www.linkedin.com/in/candelariaferrari/" target="_blank" rel="noreferrer">
          <FaLinkedin color={theme === "dark" ? "white" : "black"} />
        </a>
        <ThemeToggle/>
        <LanguageToggle/>
      </div>
    </nav>
  );
};

export default NavBar;
