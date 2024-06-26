import styles from './style.module.css';
import About from '../../components/about/about';
import { Link } from 'react-scroll';

const links = [
  { id: 'skills', link: 'SKILLS' },
  { id: 'projects', link: 'PROJECTS' },
  { id: 'contacts', link: 'CONTACTS' },
];

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Привет, меня зовут Таня, я - frontend разработчик.</h1>

      <About />

      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {links.map((item, index) => (
              <Link key={index} to={item.id} smooth={true} duration={500}>
                <li>
                  <span>{index + 1}</span>
                  <div></div>
                  <span>{item.link}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
