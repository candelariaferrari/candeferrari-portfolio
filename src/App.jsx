import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutCard from "./components/AboutCard";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="vertical-line"></div> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutCard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
