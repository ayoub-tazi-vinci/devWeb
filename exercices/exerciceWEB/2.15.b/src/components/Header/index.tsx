
import { useNavigate } from 'react-router-dom';
import './index.css'; // Assurez-vous d'importer le fichier CSS

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="navbar">
        <button onClick={() => navigate("/")}>Accueil</button>
        <button onClick={() => navigate("/movie")}>Movie Page</button>
        <button onClick={() => navigate("/cinema")}>Cinema Page</button>
        <button onClick={() => navigate("/movieForm")}>Ajouter un film</button>
      </nav>
    </header>
  );
};

export default Header;