import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContribute = () => {
    console.log("Ouvrir le formulaire de contribution");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        {/* ==== LOGO / BRAND ==== */}
        <Link to="/" className={styles.brand}>
          <div className={styles.brand__icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
            </svg>
          </div>
          <div className={styles.brand__text}>
            <h1 className={styles.brand__title}>Info Open Library</h1>
            <p className={styles.brand__subtitle}>Bibliothèque collaborative</p>
          </div>
        </Link>

        {/* ==== NAVIGATION ==== */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link to="/" className={styles.nav__link}>Acceuil</Link>
          <Link to="/about" className={styles.nav__link}>À propos</Link>
          <Link to="/contact" className={styles.nav__link}>Contact</Link>
          <Link
            to="/contribute"
            onClick={handleContribute}
            className={styles.contributeBtn}
          >
            <span className={styles.contributeBtn__icon}>+</span>
            <span className={styles.contributeBtn__text}>Contribuer</span>
          </Link>
        </nav>

        {/* ==== BURGER BUTTON ==== */}
        <button 
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
