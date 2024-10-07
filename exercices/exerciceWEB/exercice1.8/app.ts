import express from "express";

import filmRouter from "./routes/films";
const app = express();
let getCount = 0;
app.use((_req, _res, next) => {
  if (_req.method === "GET") {
    getCount++;
  }
  console.log("GET count: ", getCount);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);

export default app;
