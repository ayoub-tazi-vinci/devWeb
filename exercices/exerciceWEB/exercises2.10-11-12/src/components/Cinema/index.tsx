// components/CinemaPage.tsx
import Cinema from "./cinemaaPage";
import { Movie } from "../../type";

const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160,
    description: "Un film de science-fiction américano-britannique réalisé par Christopher Nolan, sorti en 2010.",
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
    budget: 185,
  },
];
const CinemaPage = () => {
  return <Cinema name="Mon Cinéma" movies={movies} />;
};

export default CinemaPage;
