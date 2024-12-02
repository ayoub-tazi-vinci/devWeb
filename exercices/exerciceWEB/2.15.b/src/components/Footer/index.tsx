
import './index.css'; // Assurez-vous d'importer le fichier CSS

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navbar">
        <button onClick={() => window.scrollTo(0, 0)}>Retour en haut</button>
        <button onClick={() => alert('Mentions légales')}>Mentions légales</button>
        <button onClick={() => alert('Politique de confidentialité')}>Politique de confidentialité</button>
      </nav>
    </footer>
  );
};

export default Footer;