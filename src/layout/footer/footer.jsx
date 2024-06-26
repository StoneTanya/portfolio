import Telegram from '../../ui/telegram';
import gitHubIcon from '../../assets/image/icons/24x-github.svg';
import styles from './style.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>© 2024 Developed by Tanya Volkova</p>
      <Telegram />
    </div>
  );
};

export default Footer;
