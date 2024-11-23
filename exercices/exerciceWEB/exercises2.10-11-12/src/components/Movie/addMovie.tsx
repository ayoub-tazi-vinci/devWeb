/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../type";

const addMovie = () => {
    const {
      
         handleSubmit,
         handleTitleChange,
         handleDirectorChange,
         handleDurationChange,
         handleBudgetChange,
         handleImageChange,
         handleDescriptionChange,
       } : MovieContext = useOutletContext();

       const navigate = useNavigate();

       const handlesubmitForm = (e: React.FormEvent) => {
        handleSubmit(e);
        navigate("/movie");
    };

       
       
    return (
        <div>
        <br />
        <form onSubmit={handlesubmitForm}>
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
    
    );


};

export default addMovie;