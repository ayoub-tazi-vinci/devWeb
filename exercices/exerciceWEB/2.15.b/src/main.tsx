import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/index.tsx";
import Movie from "./components/Movie/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/index.tsx";
import Cinema from "./components/Cinema/index.tsx";
import MovieForm from "./components/Movie/addMovie.tsx";
import MoviePage from "./components/Movie/MoviePage.tsx";


const rooter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "cinema",
        element: <Cinema />,
      },
      {
        path: "movieForm",
        element : <MovieForm />
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
      }

    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={rooter} />
  </StrictMode>
);
