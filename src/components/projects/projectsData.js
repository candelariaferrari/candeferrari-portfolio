import amarillo from "../../images/amarillo.png";
import landingAgrohub from "../../images/landing-agrohub.png";
import instagramAgrohub from "../../images/instagramAgrohub.png";
import imagenCanva from "../../images/imagen-animacion-canva.png";

export const projects = [
  {
    id: 1,
    translationKey: "projects.landing",
    /*   subtitle: "Frontend Developer · UI Implementer",
      description:
        "HTML5, SCSS, JavaScript/Framework, responsive design. Implementé la estructura visual y funcional completa de la landing page, desarrollando secciones clave como header, beneficios, llamados a la acción y footer. Realicé un diseño 100% responsive para mobile, tablet y desktop, aplicando buenas prácticas de CSS/SCSS para lograr una interfaz escalable y mantenible. Integré animaciones sutiles para mejorar la experiencia de usuario y optimicé el rendimiento para asegurar una web rápida y liviana, trabajando sobre un diseño previamente definido.",
       type: "landingAgrohub",
        */

    image: landingAgrohub,
    cta: [{ labelKey: "projects.cta.viewProject", link: "https://www.agrohub.com.ar/inicio" }],
    align: "right",
  },
  {
    id: 2,
    translationKey: "projects.rrss",
    /*     subtitle: "RRSS · Contenido · Figma",
        description:
          "Diseñé en Figma una serie de publicaciones para Instagram, desarrollando piezas gráficas para feed orientadas a comunicación institucional, lanzamientos y contenido informativo. Trabajé la identidad visual, composición, tipografía y uso del color para lograr un feed coherente, moderno y alineado con la marca, presentado en un mockup interactivo de perfil.",
      type: "design",
          */

    image: instagramAgrohub,
    cta: [{ labelKey: "projects.cta.viewDesigns", link: "https://www.figma.com/proto/2cY3wb06xmjVkB8uNmpaZI/Instagram-Agrohub?node-id=0-1&t=PYVpc84NX3p2uQ0o-1" }],
    align: "left",
  },
  {
    id: 3,
    translationKey: "projects.canva",
    /*  subtitle: "Canva",
     description:
       "Trabajé la estructura visual, equilibrio de composición, elección cromática y temporización de movimientos para lograr una pieza dinámica con fluidez en las transiciones.", */
    type: "design",
    image: imagenCanva,
    cta: [
      { labelKey: "projects.cta.demo", link: "https://www.canva.com/design/DAG_6426gPI/SRvcX9DmSCJn5DBT3N7dCA/watch?utm_content=DAG_6426gPI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8d4690ba0d" },
      /*   { label: "GitHub", link: "#" }, */
    ],
    align: "right",
  },
];
