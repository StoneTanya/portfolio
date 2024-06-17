import styles from "./style.module.css";
import mainPhoto from "../../assets/image/pictures/photo.png";
import { contactList } from "./contact-list";

const Questionnaire = () => {
  return (
    <section className={styles.questionnaire_section}>
      <div className={styles.photo_box}>
        <img
          className={styles.photo}
          src={mainPhoto}
          alt="портрет"
          width="240"
          height="230"
        />
      </div>
      <div className={styles.contact_box}>
        <h3 className={styles.name}>Волкова Татьяна</h3>
        <p>32 года, Москва</p>
        <ul className={styles.contact_list}>
          {contactList.map((item, index) => (
            <li key={index} className={styles.list_item}>
              <img src={item.src} alt={item.altText} max-width="30" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.button}>
          Резюме
        </button>
      </div>
    </section>
  );
};

export default Questionnaire;
