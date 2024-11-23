import { useState, useEffect } from "react";

interface Joke {
  category: string;
  joke: string;
}

const Joke = () => {
  const [joke, setJoke] = useState<Joke>({ category: "", joke: "" });

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch joke");
        }
        return response.json();
      })

      .then((joke) => setJoke(joke))
      .catch((error) => console.error("Error fetching joke:", error));
  }, []);

  return (
    <div className="joke">
      <h2>Catégorie : {joke.category}</h2>
      <p>{joke.joke}</p>
    </div>
  );
};

export default Joke;
