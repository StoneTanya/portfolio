import styles from "./style.module.css";

function About() {
  return (
    <section className={styles.about_section}>
      <h1>frontend-разработчик</h1>
      <p>
        Привет, меня зовут Таня. В 2023 году я завершила обучение на курсе по
        frontend-разработке и сейчас я открыта к настоящим вызовам, интересным
        задачам и проектам. Люблю учиться и стремлюсь к постоянному
        профессиональному развитию, изучению новых технологий и лучших практик в
        сфере frontend разработки.
      </p>
      <p>
        Сейчас я работаю с HTML, CSS, SCSS, JavaScript, React. Верстаю в
        соответствии с концепцией Pixel Perfect/Pixel Parallel и использую БЭМ
        подход. Готова внести свой вклад в создание интересных и качественных
        продуктов :)
      </p>
      <button className={styles.button}>Написать мне</button>
    </section>
  );
}

export default About;
