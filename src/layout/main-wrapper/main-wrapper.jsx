import Questionnaire from "../../components/questionnaire/questionnaire";
import About from "../../components/about/about";
import SkillsList from "../../components/skills/skills-list";
import Projects from "../../components/projects/projects";
import styles from "./style.module.css";

const MainWrapper = () => {
  return (
    <main className={styles.main_page}>
      <Questionnaire />
      <About />
      <SkillsList className={styles.skills_section}/>
      <Projects className={styles.projects_section} />
    </main>
  );
};

export default MainWrapper;