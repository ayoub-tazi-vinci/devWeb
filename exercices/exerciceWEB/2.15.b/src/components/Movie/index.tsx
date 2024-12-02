
import MovieMenu from "./MovieMenu";
import type {  MovieContext } from "../../type";
import {useOutletContext, useNavigate } from "react-router-dom";




const Movie = () => {
  const {
    movies,
    handleSubmit,
    handleTitleChange,
    handleDirectorChange,
    handleDurationChange,
    handleBudgetChange,
    handleImageChange,
    handleDescriptionChange,
   
    
  } =  useOutletContext<MovieContext>();


  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent) => {
    handleSubmit(e);
    navigate("/");
  };


  

  return (
    <div>

      {movies !== undefined ?<MovieMenu movies={movies}  />: <p>no movie available</p>}
      

      <div>
      <h1>Ajouter un nouveau film</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>Titre</label>
          <input type="text" onChange={handleTitleChange} required />
        </div>
        <div>
          <label>Réalisateur</label>
          <input type="text" onChange={handleDirectorChange} required/>
        </div>
        <div>
          <label>Durée</label>
          <input type="number" onChange={handleDurationChange} required/>
        </div>
        <div>
          <label>Budget</label>
          <input type="number" onChange={handleBudgetChange} />
        </div>
        <div>
          <label>Image</label>
          <input type="text" onChange={handleImageChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea onChange={handleDescriptionChange}></textarea>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
    </div>
  )
};



export default Movie;


