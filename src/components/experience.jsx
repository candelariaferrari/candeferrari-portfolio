import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "../styles/_experience.scss";

const jobs = [
    {
        titleKey: "experience.title-1",
        company: "experience.company-1",
        period: "experience.period-1",
        description:"experience.description-1",
    },
    {
        titleKey: "experience.title-2",
        company: "experience.company-2",
        period: "experience.period-3",
        description:"experience.description-4",
        },
    {
        titleKey: "experience.title-3",
        company: "experience.company-3",
        period: "experience.period-3",
        description:"experience.description-3",
    },
    {
        titleKey: "experience.title-4",
        company: "experience.company-4",
        period: "experience.period-4",
        description:"experience.description-4",
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
        <div className="timelineWrapper" ref={containerRef}>
            <div className="timelineContainer" >

             
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
    const { t } = useTranslation();
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
                <h3 className="title">{t(job.titleKey)}</h3>
                <h4 className="company">{t(job.company)}</h4>
                <p className="period">{t(job.period)}</p>
                <p className="description">{t(job.description)}</p>
            </div>
        </motion.div>
    );
} 

