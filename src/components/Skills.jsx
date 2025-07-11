// src/components/Skills.jsx
import {
  SiAngular,
  SiIonic,
  SiJavascript,
  SiSass,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import flexboxLogo from "../images/flexbox.svg"; 
import "../styles/_skills.scss";

const skills = [
  { name: "Angular", icon: <SiAngular color="#dd0031" /> },
  { name: "Ionic", icon: <SiIonic color="#3880ff" /> },
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "SCSS", icon: <SiSass color="#cd6799" /> },
  { name: "WordPress", icon: <FaWordpress color="#21759b" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  {
    name: "Materialize",
    icon: (
      <img
        src="https://materializecss.com/res/materialize.svg"
        alt="Materialize"
        className="custom-icon"
      />
    ),
  },
  {
    name: "Flexbox",
    icon: <img src={flexboxLogo} alt="Flexbox" className="custom-icon" />,
  },
  { name: "Illustrator", icon: <SiAdobeillustrator color="#ff7c00" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop color="#31a8ff" /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
