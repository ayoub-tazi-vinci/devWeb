import { MovieContext } from "../../type";
import { useOutletContext, useNavigate } from "react-router-dom";

const HomePage = () => {
  const { movies, deleteMovie } = useOutletContext<MovieContext>();

  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Voici notre site internet sur des films</p>

      <h2>Voici les films favoris</h2>
      <ul>
        {movies !== undefined ? (
          movies.map((movie) => (
            <li
              key={movie.id}
             
              style={{ cursor: "pointer" }}
            >
             <p  onClick={() => handleMovieClick(movie.id)} > {movie.title}</p> 
              <button onClick={() => deleteMovie(movie.id)}>Supprimer</button>
            </li>
          ))
        ) : (
          <p>Aucun film disponible</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
