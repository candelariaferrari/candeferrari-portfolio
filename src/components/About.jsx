import AboutCard from './AboutCard';
import Experience from './experience';
import StudiesTimeline from './Studies';
import Footer from './Footer';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
function About() {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
   const { t } = useTranslation();
  return (
    <section className='section-body'>
      <AboutCard />
      <div className='background-color'>
        <motion.h4
          className="text-timeline"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
         {t('about.work-experience')}
        </motion.h4>

        <Experience />
      </div>
      <motion.h4
          className="text-timeline"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {t('about.academic-training')}
        </motion.h4>
      <StudiesTimeline />
      <Footer />
    </section>
  );
}

export default About;