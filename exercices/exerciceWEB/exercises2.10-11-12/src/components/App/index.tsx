/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useState, SyntheticEvent } from "react";
import Movie from "../Movie";
import { MovieContext } from "../../type";

const defaultMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,

    budget: 25,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    budget: 6,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,

    budget: 185,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    duration: 154,

    budget: 8,
  },
  {
    id: 5,
    title: "Schindler's List",
    director: "Steven Spielberg",
    duration: 195,
    budget: 22,
  },
];




function App() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState(defaultMovies);

  const handleSubmit = (e:SyntheticEvent)=>{
    e.preventDefault();
    const newMovie = {
      id: nextMovieId(movies),
      title,
      director,
      duration: parseInt(duration),
      budget: parseInt(budget),
      image,
      description,
    };
    setMovies([...movies, newMovie]);
  }
  
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
  
  const fullMovies : MovieContext = {
    movies,
    handleSubmit,
    handleTitleChange,
    handleDirectorChange,
    handleDurationChange,
    handleBudgetChange,
    handleImageChange,
    handleDescriptionChange,
  }
  
  
  const nextMovieId=(movies : Movie[])=>{
    return movies.reduce((maxId,movie ) => Math.max(maxId,movie.id),0)+1;
    
    }

  return (
    <div>
      <Header />
      <Outlet context={fullMovies} />
      <Footer />
      
    </div>
  );
}

export default App;