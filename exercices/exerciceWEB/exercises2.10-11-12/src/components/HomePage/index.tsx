import { MovieContext } from "../../type";
import { useOutletContext,useNavigate} from "react-router-dom";


const HomePage = () => {
  const { movies } = useOutletContext<MovieContext>();

  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`);
  };


  return (
    <div>
      <h1>Bienvenue sur la page daccueil</h1>
        <p>voici notre site internet sur des films </p>

      <h2>Voici les films favories</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={ ()=>handleMovieClick(movie.id)} style={{cursor:'pointer'}}>
              {movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;