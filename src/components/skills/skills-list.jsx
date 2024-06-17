import { skills } from "./skills";
import styles from './style.module.css';

function SkillsList({className=''}) {
  return (
    <section className={className}>
      {skills.map((skill, index) => (
        <figure key={index}>
          <img alt={skill.alt} src={skill.src} height="35" width="35" />
          <figcaption>{skill.description}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export default SkillsList;
