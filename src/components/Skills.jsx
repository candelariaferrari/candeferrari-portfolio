// src/components/Skills.jsx
import {
  SiAngular,
  SiIonic,
  SiJavascript,
  SiSass,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiFigma,
  //SiVisualstudio
} from "react-icons/si";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaWordpress
} from "react-icons/fa";

import flexboxLogo from "../images/flexbox.svg";
import VScodeLogo from "../images/vscode.svg"


import "../styles/_skills.scss";

export const skillsData = {
  frontend: [
    //{ name: "Angular", icon: <SiAngular color="#dd0031" /> },
    { name: "Ionic", icon: <SiIonic color="#3880ff" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "SCSS", icon: <SiSass color="#cd6799" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
    { name: "Materialize",
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
  ],

  tools: [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F"/> },
    { name: "VSCode",icon: <img src={VScodeLogo} alt="Flexbox" className="custom-icon" />},
    { name: "NPM", icon: <FaNpm color="#CB0000"/> },
  ],

  design: [
    { name: "Illustrator", icon: <SiAdobeillustrator color="#ff7c00" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop color="#31a8ff" /> },
    { name: "After Effects", icon: <SiAdobeaftereffects color="#A77BFF" />},
    { name: "Figma", icon: <SiFigma /> }
  ],

  cms: [
    { name: "WordPress", icon: <FaWordpress color="#21759b" /> },
  ]
};
function Skills() {
  return (
    <section className="skills-section">

  {/* --- FILA ARRIBA: SOLO FRONTEND --- */}
  <div className="skills-row single">
    <div className="skill-category">
      <h4 className="skill-title">Frontend</h4>
      <div className="skills-grid">
        {skillsData.frontend.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* --- FILA ABAJO: HERRAMIENTAS + DISEÑO + CMS --- */}
  <div className="skills-row multi">
    
    {/* Herramientas */}
    <div className="skill-category">
      <h4 className="skill-title">Herramientas</h4>
      <div className="skills-grid">
        {skillsData.tools.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Diseño */}
    <div className="skill-category">
      <h4 className="skill-title">Diseño</h4>
      <div className="skills-grid">
        {skillsData.design.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* CMS */}
    <div className="skill-category">
      <h4 className="skill-title">CMS</h4>
      <div className="skills-grid">
        {skillsData.cms.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

  </div>

</section>

/*  <section className="skills-section">
      {Object.entries(skillsData).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h4 className="skill-title">
            {category === "frontend" && "Frontend"}
            {category === "tools" && "Herramientas"}
            {category === "design" && "Diseño"}
            {category === "cms" && "CMS"}
          </h4>

          <div className="skills-grid">
            {items.map((skill) => (
              <div key={skill.name} className="skill-item">
                
                <div className="icon">
                  {typeof skill.icon === "string" ? (
                    <img src={skill.icon} alt={skill.name} />
                  ) : (
                    skill.icon
                  )}
                </div>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>  */

  );
}


/* const skills = [
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
]; */

/* const Skills = () => {
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
}; */

export default Skills;
