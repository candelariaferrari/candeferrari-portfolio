import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/_experience.scss";

const jobs = [
    {
        title: "Frontend Developer",
        company: "Agrohub",
        period: "Septiembre 2020 - Actualidad",
        description:
            "Diseño y desarrollo de interfaces en Angular e Ionic, creando experiencias rápidas y escalables. Participación en el diseño UX/UI, optimización de performance y desarrollo de soluciones alineadas al negocio agro.",
    },
    {
        title: "Frontend Developer",
        company: "Pagos 360",
        period: "Abril 2022 - Septiembre 2022",
        description:
            "Desarrollo de interfaces web con Angular, maquetación de flujos, creación de landings SEO-friendly y optimización de accesibilidad.",
    },
    {
        title: "Tutora",
        company: "Coder House",
        period: "Abril 2020 - Octubre 2020",
        description:
            "Acompañamiento a estudiantes, corrección de proyectos, feedback técnico y guía de aprendizaje en HTML, CSS y JavaScript.",
    },
    {
        title: "Diseñadora Gráfica",
        company: "Combo Marketing y Diseño",
        period: "2019 - 2020",
        description:
            "Co-fundadora de estudio de diseño, branding, identidad visual y desarrollo de piezas digitales completas.",
    },
];


 export default function ExperienceTimeline() {
    const containerRef = useRef(null);

    // Detectar móvil (SSR-safe)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      if (typeof window === "undefined") return;
      const mq = window.matchMedia("(max-width: 768px)");
      const onChange = () => setIsMobile(mq.matches);
      onChange();
      // Compatibilidad: addEventListener en navegadores modernos, fallback a addListener
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else mq.addListener(onChange);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", onChange);
        else mq.removeListener(onChange);
      };
    }, []);
  
    // offset dinámico según móvil / desktop
    const offset = isMobile ? ["start 0.5", "end 1"] : ["start 0.5", "end 0.9"];
  
    // useScroll con offset dinámico
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset,
    });
  
    const [progressValue, setProgressValue] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (v) => {
      setProgressValue(v);
    });
 /*    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.5", "end 0.9"],
    });
 */
    return (
        <div className="timelineWrapper">
            <div className="timelineContainer" ref={containerRef}>

             
                <div className="timelineLine" />

              
                <motion.div
                    className="timelineProgress"
                    style={{
                        scaleY: scrollYProgress,
                        transformOrigin: "top",
                    }}
                />
              
                {jobs.map((job, idx) => (
                    <TimelineItem key={idx} job={job} index={idx} progress={scrollYProgress.get()} />
                ))}

            </div>
        </div>
    );
}

function TimelineItem({ job }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            className="item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
        
            <motion.div
                className="point"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="textContent">
                <h3 className="title">{job.title}</h3>
                <h4 className="company">{job.company}</h4>
                <p className="period">{job.period}</p>
                <p className="description">{job.description}</p>
            </div>
        </motion.div>
    );
} 
/*  function TimelineItem({ job, index, progress }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    // 1) Ref para obtener la posición del punto
    const pointRef = useRef(null);

    // 2) Estado que indica si el punto debe encenderse
    const [active, setActive] = React.useState(index === 0);

    // 3) Efecto que compara scrollYProgress con la posición del punto
    useEffect(() => {
        if (!pointRef.current) return;

        const pointTop = pointRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el punto está dentro del área donde ya pasó la línea →
        // lo activamos
        if (pointTop < windowHeight * progress) {
            setActive(true);
        }
    }, [progress]);

    return (
        <motion.div
            ref={ref}
            className="item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
         
            <motion.div
                ref={pointRef}
                className={`point ${active ? "active" : ""} ${index === 0 ? "start" : ""
                    }`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="textContent">
                <h3 className="title">{job.title}</h3>
                <h4 className="company">{job.company}</h4>
                <p className="period">{job.period}</p>
                <p className="description">{job.description}</p>
            </div>
        </motion.div>
    );
} */

