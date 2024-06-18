import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li><a href="#">Обо мне</a></li>
          <li><a href="#">Мои работы</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
