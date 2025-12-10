import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/_experience.scss";

const jobs = [
    {
        title: "Frontend Developer",
        company: "Agrohub",
        period: "2020 - Actualidad",
        description: "Diseño y desarrollo de interfaces en Angular y Ionic, creando experiencias rápidas y escalables. Participación en el diseño UX/UI y en la producción de piezas visuales para redes. Trabajo en optimización de componentes, mejora de la performance y construcción de soluciones alineadas al negocio agro.",
    },
    {
        title: "Frontend Developer",
        company: "Pagos 360",
        period: "2022",
        description: "Desarrollo de interfaces web con Angular y maquetación de nuevos flujos y funcionalidades del producto. Implementación de landing pages y sitios institucionales en WordPress, siguiendo buenas prácticas de SEO, accesibilidad y consistencia visual.",
    },
    {
        title: "Tutora",
        company: "Coder House",
        period: "2020",
        description: "Acompañamiento académico a estudiantes del curso de Desarrollo Web: corrección de trabajos prácticos, resolución de dudas técnicas y guía personalizada para mejorar sus proyectos. Generación de feedback constructivo para acelerar su aprendizaje y comprensión de las tecnologías base (HTML, CSS, JS).",
    },
    {
        title: "Diseñadora Gráfica",
        company: "Combo Marketing y Diseño",
        period: "2019 - 2020",
        description: "Co-fundadora de un estudio de diseño dedicado a la creación de identidades visuales, piezas para redes sociales y proyectos gráficos completos para emprendimientos y marcas. Participación en el proceso completo: conceptualización, diseño, branding y entrega final al cliente.",
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="timelineWrapper">
            <div className="timelineContainer">
                <motion.div
                    className="timelineLine"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {jobs.map((job, idx) => (
                    <TimelineItem key={idx} job={job} index={idx} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ job, index }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            className="item"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ?
                { opacity: 1, y: 0 } :
                { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* PERÍODO (izquierda) */}
            <span className="period teal-text">{job.period}</span>

            {/* Punto animado */}
            <motion.div
                className="point"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
            />

            {/* Texto */}
            <div className="textContent">
                <h3 className="title">{job.title}</h3>
                <h4 className="company">{job.company}</h4>
                <p className="description">{job.description}</p>
            </div>
        </motion.div>
    );
}
