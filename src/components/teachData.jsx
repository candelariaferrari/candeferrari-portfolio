import {
  SiAngular,
  SiIonic,
  SiJavascript,
  SiSass,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiFigma
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


/* import { 
    SiAngular, SiIonic, SiReact, SiJavascript, SiHtml5, SiCss3, 
    SiSass, SiBootstrap, SiMaterialdesignicons, SiFlexbox, 
    SiGithub, SiGit, SiVisualstudiocode, SiNpm,
    SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects,
    SiFigma, SiWordpress
  } from "react-icons/si"; */
  
  export const techFrontend =  [
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
  ]
  
  export const techTools =  [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F"/> },
    { name: "VSCode",icon: <img src={VScodeLogo} alt="Flexbox" className="custom-icon" />},
    { name: "NPM", icon: <FaNpm color="#CB0000"/> },
  ]
  
  export const techDesign =  [
    { name: "Illustrator", icon: <SiAdobeillustrator color="#ff7c00" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop color="#31a8ff" /> },
    { name: "After Effects", icon: <SiAdobeaftereffects color="#A77BFF" />},
    { name: "Figma", icon: <SiFigma /> }
  ]
  
  export const techCMS = [
    { name: "WordPress", icon: <FaWordpress color="#21759b" /> },
  ]
  