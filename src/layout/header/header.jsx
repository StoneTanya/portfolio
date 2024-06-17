import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>Обо мне</li>
          <li>Мои работы</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
