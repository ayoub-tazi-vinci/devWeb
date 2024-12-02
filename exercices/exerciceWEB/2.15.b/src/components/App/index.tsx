/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useState, SyntheticEvent, useEffect } from "react";
import { MovieType, MovieContext } from "../../type";

function App() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  async function getAllMovies() {
    try {
      const response = await fetch("/api/films");
      if (!response.ok) {
        throw new Error("Impossible de récupérer les films");
      }
      const movies = await response.json();
      return movies;
    } catch (error) {
      console.error(error);
    }
  }

  const addMovie = async (newMovie: MovieType) => {
    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      };
      const response = await fetch("/api/films", option);
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const createdMovie = await response.json();
      setMovies([...movies, createdMovie]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMovie = async (id: number) => {
    try {
      const option = {
        method: "DELETE",
      };
      const response = await fetch(`/api/films/${id}`, option);
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const deletedMovie = await response.json();
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== deletedMovie.id));
    } catch (error) {
      console.error(error);
    }
  };


  const handleSubmit =  (e: SyntheticEvent) => {
    e.preventDefault();
    
    addMovie({ id: nextMovieId(movies), title: title, director: director, duration: parseInt(duration), budget:budget ? parseInt(budget) : undefined, image: image || undefined, description: description || undefined});
    setTitle("");
    setDirector("");
    setDuration("");
    setBudget("");
    setImage("");
    setDescription("");
    };
  

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    setDuration(durationInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    setBudget(budgetInput.value);
  };

  const handleImageChange = (e: SyntheticEvent) => {
    const imageInput = e.target as HTMLInputElement;
    setImage(imageInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    setDescription(descriptionInput.value);
  };

  const fullMovies: MovieContext = {
    movies,
    handleSubmit,
    handleTitleChange,
    handleDirectorChange,
    handleDurationChange,
    handleBudgetChange,
    handleImageChange,
    handleDescriptionChange,
    addMovie,
    deleteMovie,
    
  };

  const nextMovieId = (movies: MovieType[]) => {
    return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
  };

  return (
    <div>
      <Header />
      <Outlet context={fullMovies} />
      <Footer />
    </div>
  );
}

export default App;