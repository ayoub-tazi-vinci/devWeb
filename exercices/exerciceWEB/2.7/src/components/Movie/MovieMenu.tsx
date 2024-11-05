import {Movie} from "../../type"

interface MovieProps{
    movies: Movie[];
}

const MovieMenu = ({ movies }: MovieProps) => {
    return (
      <div>
        <h1>Movies</h1>
        {movies.map((movie, index) => (
          <div key={index} className="movie">
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Duration: {movie.duration} minutes</p>
            {movie.image ? <img src={movie.image} alt={movie.title} /> : null}
            {movie.description ? <p>{movie.description}</p> : null}
            {movie.budget ? <p><strong>Budget:</strong> ${movie.budget} million</p> : null}
          </div>
        ))}
      </div>
    );
  };


export default MovieMenu;