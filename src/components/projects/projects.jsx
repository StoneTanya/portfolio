import { projectsList } from './projects-list';
import { Element } from 'react-scroll';
import Link from '../../ui/link/link';
import styles from './style.module.css';

function Projects() {
  return (
    <Element id="projects">
      <section>
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
                <Link className={styles.button_git} link={project.git}>
                  GitHub
                </Link>
                <Link className={styles.button_visit} link={project.link}>
                  Visit Website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default Projects;
