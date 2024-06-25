import styles from './style.module.css';
import About from '../../components/about/about';

const links = ['SKILLS', 'PROJECTS', 'CONTACTS'];
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Привет, меня зовут Таня, я - frontend разработчик.</h1>

      <About />

      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {links.map((item, index) => (
              <li key={index}>
                <span>01</span>
                <div></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
