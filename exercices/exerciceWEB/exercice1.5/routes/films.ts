import { Router } from "express";

import { Film, newFilm } from "../types";

const router = Router();

const films: Film[] = [
  {
    id: 1,
    title: "4 fromages",
    director: "ayoub",
    duration: 4,
  },
  {
    id: 2,
    title: "4 fromages",
    director: "ayoub",
    duration: 4,
  },
  {
    id: 3,
    title: "4 fromages",
    director: "ayoub",
    duration: 4,
  },
];

router.get("/", (req, res) => {
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }
  if (!req.query["min-duration"]) {
    return res.json(films);
  }
  const minDuration = Number(req.query["min-duration"]);
  const filteredFilm = films.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredFilm);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } =
    body as newFilm;

  const titleUse = String(req.body.title);
  console.log(titleUse);
  
  const filmUse = films.find((film) => titleUse === film.title);
  console.log(filmUse);
  
  if (filmUse) return res.sendStatus(409);

  const directorUse=String(req.body.duration);
  const filmUse2 = films.find((film) => directorUse === film.director);
  if (filmUse2) return res.sendStatus(409);

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  films.push(newFilm);
  return res.json(newFilm);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.sendStatus(400).json({ error: "Invalid ID" });
  }
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

export default router;
