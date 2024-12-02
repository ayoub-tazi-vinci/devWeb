import { useState } from "react";
import { Movie } from "../../type";

interface MovieProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieProps) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const handleSetDescrition = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  return (
    <li onClick={handleSetDescrition}>
      <p>
        <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      </p>
      <p>{descriptionVisible ? <p>{movie.description}</p> : null}</p>
    </li>
  );
};

export default MovieItem;
