import Telegram from '../../ui/telegram';
import gitHubIcon from '../../assets/image/icons/24x-github.svg';

const Footer = () => {
  return (
    <div>
      <p>© 2019 Developed by Tanya Volkova</p>
      <a href="/" target="_blank">
        @StoneTania
        <img src={gitHubIcon} alt="Иконка телеграмм" max-width="30" />
      </a>
      <Telegram />
    </div>
  );
};

export default Footer;
