import { mainSkills, additionalSkills } from './skills';
import { Element } from 'react-scroll';
import styles from './style.module.css';

function SkillsList({ className = '' }) {
  return (
    <Element id="skills">
      <section className={className}>
        <h2>Skills</h2>

        <div className={styles.skills_wrapper}>
          {mainSkills.map((skill, index) => (
            <figure key={index}>
              <img alt={skill.alt} src={skill.src} height="35" width="35" />
              <figcaption>{skill.description}</figcaption>
            </figure>
          ))}
        </div>
        <h3>Вспомогательные технологии и инструменты</h3>
        <div className={styles.skills_wrapper}>
          {additionalSkills.map((skill, index) => (
            <li key={index}>
              <img alt={skill.alt} src={skill.src} height="35" width="35" />
            </li>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default SkillsList;
