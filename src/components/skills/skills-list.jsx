import { skills } from "./skills";
import styles from './style.module.css';

function SkillsList({className=''}) {
  return (
    <section className={className}>
      <h2>Skills</h2>

      <div className={styles.skills_wrapper}>
      {skills.map((skill, index) => (
        <figure key={index}>
          <img alt={skill.alt} src={skill.src} height="35" width="35" />
          <figcaption>{skill.description}</figcaption>
        </figure>
      ))}
        </div>
    </section>
  );
}

export default SkillsList;
