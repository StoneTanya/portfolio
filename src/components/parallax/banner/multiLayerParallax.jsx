import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.css';
import waves from '../../../assets/image/pictures/waves.svg';

function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const moonY = useTransform(scrollYProgress, [1, 0], ['-70%', '0%']);

  return (
    <>
      {/* <div ref={ref}> */}
      <motion.div style={{ y: moonY }} className={styles.bg_moon}></motion.div>

      <div className={styles.parallax_full}></div>

      <div className={styles.parallax_bottom}></div>

      <img src={waves} alt="A flat image of waves in the horizon" className={styles.image} />
      {/* </div> */}
    </>
  );
}

export default MultiLayerParallax;
