import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/_studies.scss";

const studies = [
    {
        title:"Angular: De cero a experto",
        company:"Udemy",
        period:"Agosto 2025",
        description:"Zoneless, Signals, Bindings, SSR, SSG, SEO, Testing, i18n, TanStack, Monorepos, NPM, Paquetes personalizados y más"
    },
    {
        title: "Full Stack",
        company: "Digital House",
        period: "Diciembre 2021 - Junio 2022",
        description:
            "Curso de programación Full Stack Adquisición de conocimientos sobre Html, Css, React, JavaScript,Base de datos, Apis.",
    },
    {
        title: "JavaScript",
        company: "Coder House",
        period: "Septiembre 2020 - Noviembre 2020",
        description:
            "Curso de JavaScript, utilidad de las librerías jQuery, técnicas de desarrollo para apps modernas con AJAX.",
    },
    {
        title: "Desarrollo web",
        company: "Coder House",
        period: "Agosto 2019 - Diciembre 2019",
        description:
            "Curso de Desarrollo Web, adquisición de conocimientos sobre Html , Css, Scss,GitHub, Bootstrap.",
    },
    {
        title: "Diseño Gráfico",
        company: "Universidad Blas Pascal",
        period: "2011 - 2015",
        description:
            "Co-fundadora de estudio de diseño, branding, identidad visual y desarrollo de piezas digitales completas.",
    },
];


 export default function StudiesTimeline() {
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
    const offset = isMobile ? ["start 0.2", "end 1.2"] : ["start 0.5", "end 0.9"];
  
    // useScroll con offset dinámico
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset,
    });
  
    const [progressValue, setProgressValue] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (v) => {
      setProgressValue(v);
    });

    return (
        <div className="timelineWrapper-studies" ref={containerRef}>
            <div className="timelineContainer-studies" >

             
                <div className="timelineLine-studies" />

              
                <motion.div
                    className="timelineProgress-studies"
                    style={{
                        scaleY: scrollYProgress,
                        transformOrigin: "top",
                    }}
                />
              
                {studies.map((studie, idx) => (
                    <TimelineItem key={idx} studie={studie} index={idx} progress={scrollYProgress.get()} />
                ))}

            </div>
        </div>
    );
}

function TimelineItem({ studie }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            className="item-studies"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
        
            <motion.div
                className="point-studies"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
            />

            <div className="textContent-studies">
                <h3 className="title-studies">{studie.title}</h3>
                <h4 className="company-studies">{studie.company}</h4>
                <p className="period-studies">{studie.period}</p>
                <p className="description-studies">{studie.description}</p>
            </div>
        </motion.div>
    );
} 

