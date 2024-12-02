/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../type";

const AddMovie = () => {
  const {
    handleSubmit,
    handleTitleChange,
    handleDirectorChange,
    handleDurationChange,
    handleBudgetChange,
    handleImageChange,
    handleDescriptionChange,
  } = useOutletContext<MovieContext>();

  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent) => {
    handleSubmit(e);
    navigate("/movie");
  };

  return (
    <div>
      <h1>Ajouter un nouveau film</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>Titre</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div>
          <label>Réalisateur</label>
          <input type="text" onChange={handleDirectorChange} />
        </div>
        <div>
          <label>Durée</label>
          <input type="number" onChange={handleDurationChange} />
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
  );
};

export default AddMovie;