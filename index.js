import express from "express";
//importar rutas
import animeRoutes from "./routes/anime.routes.js";

const app = express();

const PORT = 3000;
app.listen(3000, () => {
	console.log("Servidor escuchado en puerto "+ PORT);
});

//RUTAS - ENDPOINTS
app.use("/api/v1/animes", animeRoutes)