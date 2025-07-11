import WrapperAnimation from "../components/WrapperAnimation";

function Projects() {
  return (
    <WrapperAnimation>
      <div className="section">
        <div className="container">
          <h4 className="teal-text text-darken-4">Proyectos</h4>

          <div className="row">

            {/* Proyecto 1 */}
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">ToDo App</span>
                  <p>Aplicación para gestionar tareas. Hecha con React y localStorage.</p>
                  <p><strong>Tecnologías:</strong> React, CSS</p>
                </div>
                <div className="card-action">
                  <div className="card-action">
                    
                    <a href="https://github.com/tu-usuario/todo-app" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://todoapp-candelariaferrari.netlify.app" target="_blank" rel="noreferrer">
                      Ver online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">Landing Page agrohub</span>
                  <p>Landing institucional realizada con HTML, CSS y Materialize.</p>
                  <p><strong>Tecnologías:</strong> HTML, SCSS, Materialize</p>
                </div>
                <div className="card-action">
                  <a href="https://github.com/tu-usuario/landing-page" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </WrapperAnimation>
  );
}

export default Projects;
