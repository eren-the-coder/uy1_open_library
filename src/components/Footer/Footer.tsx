import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; Mangone Messi 2025 - Tous droits réservés</p>
      <div className={styles.links}>
        <a href="about.html" className={styles.link}>À propos</a>
        <a href="contact.html" className={styles.link}>Me contacter</a>
        <a href="privacy.html" className={styles.link}>Confidentialité</a>
      </div>
    </footer>
  );
};

export default Footer;