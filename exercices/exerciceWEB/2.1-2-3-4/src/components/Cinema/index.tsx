interface Movie {
  title: string;
  director: string;
}

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.movies.map((movie, index) => (
        <p key={index}>
          {movie.title} - {movie.director}
        </p>
      ))}
    </div>
  );
};

export default Cinema;
