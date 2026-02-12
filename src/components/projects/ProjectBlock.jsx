import { transform } from "typescript";
import styles from "./Projects.module.scss";

const ProjectBlock = ({ project, position }) => {
  const tags = Array.isArray(project.tags) ? project.tags.join(" · ") : "";

  return (
    <div className={`${styles.projectBlock} ${styles[position]}`} >
      <div className={styles.text}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.cta && (
          <div className={styles.actions}>
            {project.cta.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={styles.button}
                target="_blank"
                rel="noreferrer"
              >
                {item.label} →
              </a>
            ))}
          </div>
        )}

      </div>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} />
        </div>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div>

      {/*     <div className={styles.card}>
        <img src={project.image} alt={project.title} />
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div> */}
    </div>
  );
};

export default ProjectBlock;
