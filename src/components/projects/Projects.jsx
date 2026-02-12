import styles from "./Projects.module.scss";
import { projects } from "./projectsData";
import ProjectBlock from "./ProjectBlock";
import { useTranslation } from "react-i18next";
export default function ProjectsSection() {
     const { t } = useTranslation();
  return (
    <section className='projectsSection' id="projects">
      <h2 className={styles.title}>
      {t('projects.title')}
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
