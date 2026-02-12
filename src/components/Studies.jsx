import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "../styles/_studies.scss";

const studies = [
  {
    titleKey: "studies.title-1",
    company: "studies.company-1",
    period: "studies.period-1",
    description: "studies.description-1",
  },
  {
    titleKey: "studies.title-2",
    company: "studies.company-2",
    period: "studies.period-2",
    description: "studies.description-2",
  },
  {
    titleKey: "studies.title-3",
    company: "studies.company-3",
    period: "studies.period-3",
    description: "studies.description-3",
  },
  {
    titleKey: "studies.title-4",
    company: "studies.company-4",
    period: "studies.period-4",
    description: "studies.description-4",
  },
  {
    titleKey: "studies.title-5",
    company: "studies.company-5",
    period: "studies.period-5",
    description: "studies.description-5",
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
  const { t } = useTranslation();
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
        <h3 className="title-studies">{t(studie.titleKey)}</h3>
        <h4 className="company-studies">{t(studie.company)}</h4>
        <p className="period-studies">{t(studie.period)}</p>
        <p className="description-studies">{t(studie.description)}</p>
      </div>
    </motion.div>
  );
}

