import { projectsList } from './projects-list';
import styles from './style.module.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={styles.projects_table}>
        {projectsList.map((project, index) => (
          <div key={index} className={styles.projects_table_row}>
            <h3 className={styles.title}>{project.name}</h3>

            <div className={styles.description}>
              <p>{project.description}</p>
            </div>
            <p className={styles.stack}>{project.technologies}</p>

            <div className={styles.buttons}>
              <button className={styles.button_git}>GitHub</button>
              <button className={styles.button_visit}>Visit Website</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
