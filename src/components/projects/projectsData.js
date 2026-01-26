import amarillo from "../../images/amarillo.png";
import landingAgrohub from "../../images/landing-agrohub.png";
import instagramAgrohub from "../../images/instagramAgrohub.png";
export const projects = [
  {
    id: 1,
    title: "Diseño y desarrollo de Landing",
    subtitle: "Frontend Developer · UI Implementer",
    description:
      "HTML5, SCSS, JavaScript/Framework, responsive design. Implementé la estructura visual y funcional completa de la landing page, desarrollando secciones clave como header, beneficios, llamados a la acción y footer. Realicé un diseño 100% responsive para mobile, tablet y desktop, aplicando buenas prácticas de CSS/SCSS para lograr una interfaz escalable y mantenible. Integré animaciones sutiles para mejorar la experiencia de usuario y optimicé el rendimiento para asegurar una web rápida y liviana, trabajando sobre un diseño previamente definido.",
    type: "landingAgrohub",
    image: landingAgrohub,
    cta: [{ label: "Ver proyecto", link: "https://www.agrohub.com.ar/inicio" }],
    align: "right",
  },
  {
    id: 2,
    title: "Diseño Redes",
    subtitle: "RRSS · Contenido · Figma",
    description:
      "Diseñé en Figma una serie de publicaciones para Instagram, desarrollando piezas gráficas para feed orientadas a comunicación institucional, lanzamientos y contenido informativo. Trabajé la identidad visual, composición, tipografía y uso del color para lograr un feed coherente, moderno y alineado con la marca, presentado en un mockup interactivo de perfil.",
    type: "design",
    image: instagramAgrohub,
    cta: [{ label: "Ver diseños", link: "https://www.figma.com/proto/2cY3wb06xmjVkB8uNmpaZI/Instagram-Agrohub?node-id=0-1&t=PYVpc84NX3p2uQ0o-1" }],
    align: "left",
  },
  {
    id: 3,
    title: "App Frontend",
    subtitle: "React · Angular · Ionic",
    description:
      "Aplicación web con consumo de API y manejo de estados.",
    type: "app",
    image: amarillo,
    cta: [
      { label: "Demo", link: "#" },
      { label: "GitHub", link: "#" },
    ],
    align: "right",
  },
];
