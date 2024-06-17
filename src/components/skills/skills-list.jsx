import { skills } from "./skills";

function SkillsList() {
  return (
    <section>
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
