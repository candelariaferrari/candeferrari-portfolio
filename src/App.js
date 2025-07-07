/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo">Cande</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/About">Sobre mí</Link></li>
              <li><Link to="/Projects">Proyectos</Link></li>
              <li><Link to="/Contact">Contacto</Link></li>
            </ul>
          </div>
        
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
