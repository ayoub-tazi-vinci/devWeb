import { Router } from "express";

import { Film} from "../types";


const router = Router();



const Film: Film[] = [
    {
      id: 1,
      title: "4 fromages",
     director : "ayoub",
     duration: 4,
    },
    {
        id: 2,
        title: "4 fromages",
       director : "ayoub",
       duration: 4,
    },
    {
        id: 1,
        title: "4 fromages",
       director : "ayoub",
       duration: 4,
    },
  ];

  router.get("/", (req, res) => {
          if (req.query.order && typeof req.query.order !== "string") {
              return res.sendStatus(400);
          } 
          
        
          return res.json(Film);
      })


export default router;