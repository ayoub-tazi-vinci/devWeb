import { Request } from "express";

interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type newFilm = Omit<Film, "id">;

interface Comment {
  id: number;
  content: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

interface AuthenticatedUser {
  id: number;
  username: string;
  token: string;
}

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewDrink = Omit<Drink, "id">;

interface PotentialUser {
  username: string;
  password: string;
}


export type {
  Pizza,
  PizzaToUpdate,
  NewPizza,
  Film,
  newFilm,
  Comment,
  User,
  AuthenticatedUser,
  AuthenticatedRequest,
  JwtPayload,
  Drink,
  NewDrink,
  PotentialUser
};