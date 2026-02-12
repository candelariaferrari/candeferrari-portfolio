import { transform } from "typescript";
import styles from "./Projects.module.scss";
import { useTranslation } from "react-i18next";

const ProjectBlock = ({ project, position }) => {
    const { t } = useTranslation();
  const tags = Array.isArray(project.tags) ? project.tags.join(" · ") : "";

  return (
    <div className={`${styles.projectBlock} ${styles[position]}`} >
      <div className={styles.text}>
        <h3>{t(`${project.translationKey}.title`)}</h3>
        <p> {t(`${project.translationKey}.description`)}</p>

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
                 {t(item.labelKey)} →
              </a>
            ))}
          </div>
        )}

      </div>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} />
        </div>
        <p className={styles.subtitle}> {t(`${project.translationKey}.subtitle`)}</p>
      </div>

      {/*     <div className={styles.card}>
        <img src={project.image} alt={project.title} />
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div> */}
    </div>
  );
};

export default ProjectBlock;
