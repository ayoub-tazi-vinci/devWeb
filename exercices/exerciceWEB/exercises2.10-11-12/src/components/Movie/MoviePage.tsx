import { useParams } from "react-router-dom";
import { MovieContext } from "../../type";
import { useOutletContext } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useOutletContext<MovieContext>();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Réalisateur: {movie.director}</p>
      <p>Durée: {movie.duration} minutes</p>
      <p>Budget: {movie.budget} $</p>
      <img src={movie.image} alt={movie.title} />
      <p>Description: {movie.description}</p>
    </div>
  );
};

export default MoviePage;