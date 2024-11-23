import { Movie } from "../../type";
import MovieItem from "../Movie/movieIteam";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      
      {props.movies.map((movie, index) => (
        <div key={index}>
          <MovieItem  movie={movie} />
        </div>
      ))}
               
    </div>
  );
};

export default Cinema;
