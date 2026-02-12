import styles from "./Projects.module.scss";
import { projects } from "./projectsData";
import ProjectBlock from "./ProjectBlock";

export default function ProjectsSection() {
  return (
    <section className='projectsSection' id="projects">
      <h2 className={styles.title}>
        PROYECTOS
        <span className={styles.underline}></span>
      </h2>

      <div className={styles.projectsList}>
        {projects.map(project => (
          <ProjectBlock key={project.id} project={project}  position={project.align}/>
        ))}
      </div>
    </section>
  );
}
