/* eslint-disable react-hooks/rules-of-hooks */


import { useOutletContext } from "react-router-dom";
import {  MovieContext, MovieType} from "../../type"

interface MovieProps{
    movies: MovieType[];
}






const MovieMenu = ({ movies }: MovieProps) => {

  const {deleteMovie} = useOutletContext<MovieContext>();

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
            <button onClick={()=>deleteMovie(movie.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    );
  };


export default MovieMenu;