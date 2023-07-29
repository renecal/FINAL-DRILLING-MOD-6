import express from "express";
//importar rutas
import animeRoutes from "./routes/anime.routes.js";

const app = express();

//middlewares
//middlewares actuan antes de llegar al controlador
app.use(express.json());  //req.body  x json
// Middleware que analiza las solicitudes entrantes con cargas JSON
app.use(express.urlencoded({ extended: true }));   //req.body 
// Middleware que analiza las solicitudes entrantes con cargas útiles codificadas en urlen

//RUTAS - ENDPOINTS
app.use("/api/v1/animes", animeRoutes)

export default app;