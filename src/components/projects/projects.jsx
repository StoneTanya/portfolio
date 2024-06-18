import { projectsList } from './projects-list';
import styles from './style.module.css';

function Projects({ className = '' }) {
  return (
    <section className={className}>
      <h2>Portfolio</h2>

      {projectsList.map((project, index) => (
        <div key={index} className={styles.projects_table_row}>

          <p>{project.num}</p>

          <div>
            <img src={project.imageSrc} width={250} alt="миниатюра проекта"></img>
          </div>

          <h3>{project.name}</h3>

          <div>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
          </div>

<div>
  <button>GitHub</button>
  <button>Visit Site</button>
</div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
