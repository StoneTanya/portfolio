import styles from './style.module.css';
import mainPhoto from '../../assets/image/pictures/photo.png';
import { Element } from 'react-scroll';
import { contactList } from './contact-list';

const Questionnaire = () => {
  return (
    <Element id="contacts">
      <section>
        <h2>Contacts</h2>
        <div className={styles.questionnaire_section}>
          <div className={styles.photo_box}>
            <img className={styles.photo} src={mainPhoto} alt="портрет" width="240" height="230" />
          </div>
          <div className={styles.contact_box}>
            <h3 className={styles.title}>Таня Волкова</h3>
            <p>г. Москва</p>
            <ul className={styles.contact_list}>
              {contactList.map((item, index) => (
                <li key={index} className={styles.list_item}>
                  <a href={item.link} target="_blank">
                    <img src={item.src} alt={item.altText} max-width="30" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Questionnaire;
