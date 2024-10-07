import { Router } from "express";

import { Film, newFilm } from "../types";

const router = Router();

import path from "node:path";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
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
    return res.json(defaultFilms);
  }
  const films = parse(jsonDbPath, defaultFilms);
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

    const films = parse(jsonDbPath, defaultFilms);

  const titleUse = String(req.body.title);
  console.log(titleUse);

  const filmUse = defaultFilms.find((film) => titleUse === film.title);
  console.log(filmUse);

  if (filmUse) return res.sendStatus(409);

  const directorUse = String(req.body.duration);
  const filmUse2 = defaultFilms.find((film) => directorUse === film.director);
  if (filmUse2) return res.sendStatus(409);

  const nextId =
    defaultFilms.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  defaultFilms.push(newFilm);
  serialize(jsonDbPath, films);
  return res.json(newFilm);
});

router.get("/:id", (req, res) => {
  const films = parse(jsonDbPath, defaultFilms);
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

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = defaultFilms.splice(index, 1); // splice() returns an array of the deleted elements
  serialize(jsonDbPath, films);
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const {
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  }: Partial<newFilm> = body;

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  if (budget) {
    film.budget = budget;
  }
  if (description) {
    film.description = description;
  }
  if (imageUrl) {
    film.imageUrl = imageUrl;
  }
  serialize(jsonDbPath, films);
  return res.json(film);
});







export default router;
