import { NavLink } from "react-router-dom";
import ThemeToggle from './ThemeToggle';

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
          <li><span>ES</span></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
