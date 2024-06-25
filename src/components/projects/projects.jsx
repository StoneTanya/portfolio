import { projectsList } from './projects-list';
import styles from './style.module.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Portfolio</h2>
      <div className={styles.projects_table}>
        {projectsList.map((project, index) => (
          <div key={index} className={styles.projects_table_row}>
            <p>{project.num}</p>
            <h3>{project.name}</h3>

            <div>
              <p>{project.description}</p>
              <p className={styles.stack}>{project.technologies}</p>
            </div>

            <div>
              <button>GitHub</button>
              <button>Visit Site</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
