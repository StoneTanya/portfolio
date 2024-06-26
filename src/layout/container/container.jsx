import styles from './style.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainWrapper from '../main-wrapper/main-wrapper';
import MultiLayerParallax from '../../components/parallax/banner/multiLayerParallax';

const Container = () => {
  return (
    <div className={styles.container}>
      <MultiLayerParallax />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Header />
        </div>
        <div className={styles.right}>
          <MainWrapper />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Container;
