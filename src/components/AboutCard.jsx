import yoImg from '../images/yo.png';
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import Skills from './Skills';

import "../styles/_about.scss";      
function AboutCard() {
  const { t } = useTranslation();
  return (
    <section className="about-header section">
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems:"center", width:'95%' }}>

        {/* FOTO */}
        <div className="col s12 m4">
          <motion.img
            src={yoImg}
            alt="Candelaria Ferrari"
            className="responsive-img z-depth-2"
            style={{ borderRadius: "12px", width:"90%" }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* INFO */}
        <div className="col s12 m8" style={{ padding: '0rem' }}>
          <h3 className="teal-text text-darken-4 text-shadow">{t('hi')}</h3>
          <p>
            Soy desarrolladora frontend con más de 4 años de experiencia, especializada en Angular, Ionic y Wordpress.
            Vivo en Jesús María - Córdoba con mi pareja y mi hija de dos años. Me apasiona crear interfaces funcionales y accesibles.
            Me considero responsable, autodidacta y con muchas ganas de seguir creciendo. Estoy aprendiendo React y buscando nuevos desafíos.
          </p>

         <Skills></Skills>
        </div>
      </div>
      
    </section>
   
  );
}

export default AboutCard;
