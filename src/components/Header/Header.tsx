// components/Header.js
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Info Open Library</h1>
        <h2>Faciliter l'accès aux ressources pour les étudiants d'info</h2>
      </div>
      <button className="btn btn--secondary about-btn">À propos</button>
    </header>
  );
};

export default Header;