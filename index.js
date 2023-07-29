import express from "express";

const app = express();

const PORT = 3000;
app.listen(3000, () => {
	console.log("Servidor escuchado en puerto "+ PORT);
});

//RUTAS - ENDPOINTS
app.get("/", (req, res) => {
	res.send("Pagina principal");
})