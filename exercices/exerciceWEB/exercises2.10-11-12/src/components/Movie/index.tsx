
import MovieMenu from "./MovieMenu";
import type { Movie, MovieContext } from "../../type";
import { useOutletContext } from "react-router-dom";



const Movie = () => {
  const {
   movies : movies,
    handleSubmit,
    handleTitleChange,
    handleDirectorChange,
    handleDurationChange,
    handleBudgetChange,
    handleImageChange,
    handleDescriptionChange,
  } : MovieContext = useOutletContext();
  

  return (
    <div>
      <MovieMenu movies={movies} />

      <div>
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
            <input type="text" id="title" onChange={handleTitleChange} required />
            <br />
            <label htmlFor="director">director</label>
            <input type="text" id="director" onChange={handleDirectorChange} required />
            <br />
            <label htmlFor="duration">duration</label>
            <input type="number" id="duration" onChange={handleDurationChange} required />
            <br />
            <label htmlFor="budget">budget</label>
            <input type="number" id="budget" onChange={handleBudgetChange}  />
            <br />
            <label htmlFor="image">image</label>
            <input type="text" id="image" onChange={handleImageChange} />
            <br />
            <label htmlFor="description">description</label>
            <input type="text" id="description" onChange={handleDescriptionChange} />
            <br />
            <button type="submit">Add Movie</button>


        </form>
        
      </div>
    </div>
  );
};



export default Movie;


