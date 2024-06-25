import { mainSkills, additionalSkills } from './skills';
import styles from './style.module.css';

function SkillsList({ className = '' }) {
  return (
    <section className={className} id="skills">
      <h2>Skills</h2>

      <div className={styles.skills_wrapper}>
        {mainSkills.map((skill, index) => (
          <figure key={index}>
            <img alt={skill.alt} src={skill.src} height="35" width="35" />
            <figcaption>{skill.description}</figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.skills_wrapper}>
        {additionalSkills.map((skill, index) => (
          <li key={index}>
            <img alt={skill.alt} src={skill.src} height="35" width="35" />
          </li>
        ))}
      </div>
    </section>
  );
}

export default SkillsList;
