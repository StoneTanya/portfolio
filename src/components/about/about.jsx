import Link from '../../ui/link/link';
import { TelegramLink } from '../../utils/utils';
import CV from '../../assets/CV-frontend-Volkova-Tanya.pdf';
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
      <div className={styles.buttons}>
        <Link className={styles.button} link={TelegramLink}>
          Написать мне
        </Link>
        <Link className={styles.button_cv} link={CV} download>
          Резюме
        </Link>
      </div>
    </section>
  );
}

export default About;
