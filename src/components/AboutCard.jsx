import yoImg from '../images/yo.png'; 
import { motion } from "framer-motion";
function AboutCard() {
  return (
    <section className="about-header section">
      <div className="container row" style={{ display: 'flex', flexWrap: 'wrap' }}>

        {/* FOTO */}
        <div className="col s12 m5">
          <motion.img
            src={yoImg}
            alt="Candelaria Ferrari"
            className="responsive-img z-depth-2"
            style={{ borderRadius: "12px" }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* INFO */}
        <div className="col s12 m7" style={{ padding: '2rem' }}>
          <h5 className="teal-text text-darken-4">¡Hola, Soy Cande!</h5>
          <p>
            Soy desarrolladora frontend con más de 4 años de experiencia, especializada en Angular, Ionic y Wordpress.
            Vivo en Jesús María - Córdoba con mi pareja y mi hija de dos años. Me apasiona crear interfaces funcionales y accesibles.
            Me considero responsable, autodidacta y con muchas ganas de seguir creciendo. Estoy aprendiendo React y buscando nuevos desafíos.
          </p>

          <h6 className="amber-text text-darken-2" style={{ marginTop: '1.5rem' }}>Skills</h6>
          <div className="row">
            <div className="col s6 m4">
              <ul>
                <li>Angular</li>
                <li>Ionic</li>
                <li>GitHub</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="col s6 m4">
              <ul>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>Wordpress</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
                <li>Flexbox</li>
              </ul>
            </div>
            <div className="col s12 m4">
              <ul>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
