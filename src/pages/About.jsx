import yoImg from '../images/yo.png'
function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="card horizontal">
          <div className="card-image">
            <img src={yoImg} alt="Cande" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h5 className="teal-text text-darken-4">¡Hola! Soy Cande 👩‍💻</h5>
              <p>
                Soy desarrolladora frontend con más de 4 años de experiencia, especializada en <strong>Angular, Ionic y Wordpress</strong>. Vivo en Río Cuarto con mi pareja y mi hija de dos años.
              </p>
              <p>
                Me apasiona crear interfaces funcionales y accesibles. Me considero responsable, autodidacta y con muchas ganas de seguir creciendo. Estoy aprendiendo React y buscando nuevos desafíos.
              </p>
            </div>
            <div className="card-action">
              <a href="tu-cv.pdf" download className="btn teal">
                <i className="material-icons left">file_download</i>
                Descargar CV
              </a>
              <a href="https://www.linkedin.com/in/candelariaferrari/" target="_blank" className="btn grey darken-3">
                <i className="material-icons left">person</i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
