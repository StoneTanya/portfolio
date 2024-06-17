import styles from "./style.module.css";
function Projects() {
  return (
    <section className={styles.projects_section}>
      <div className={styles.projects_table_row}>
        <p>1</p>
        <div>
          <img></img>
        </div>
        <p>Name</p>
        <div>
          <button>кликни, чтобы увидеть описание</button>
          <div>описание</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
