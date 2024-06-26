import styles from './style.module.css';

function Link({ children, link, className = '', download = '' }) {
  return (
    <a
      className={`${styles.link} ${className}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
    >
      {children}
    </a>
  );
}

export default Link;
