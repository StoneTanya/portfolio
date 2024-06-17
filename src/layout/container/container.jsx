import styles from "./style.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainWrapper from "../main-wrapper/main-wrapper";

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainWrapper />
      <Footer />
    </div>
  );
};

export default Container;
