import styles from './style.module.css';

function About() {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_description}>
        <p>
          В 2023 году я завершила обучение на курсе по frontend-разработке и сейчас я открыта к
          настоящим вызовам, интересным задачам и проектам. Люблю учиться и стремлюсь к постоянному
          профессиональному развитию, изучению новых технологий и лучших практик в сфере frontend
          разработки.
        </p>
        <p>
          Сейчас я работаю, в основном, с HTML, CSS, SCSS, JavaScript (ES6+), React, Vite. Могу
          верстать в соответствии с концепцией Pixel Perfect/Pixel Parallel и использую БЭМ подход.
          Готова внести свой вклад в создание интересных и качественных продуктов!
        </p>
      </div>
      <button className={styles.button}>Написать мне</button>
      <button type="button" className={styles.button_cv}>
        Резюме
      </button>
    </section>
  );
}

export default About;
