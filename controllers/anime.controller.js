import fs from "fs/promises";  // manejo de archivos asincrono con promesas
import * as path from "path";  //donde estan las rutas
import { fileURLToPath } from "url"; // obtiene la informacion de la url
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
//meta.url manejo de carpetas y archivos

// __dirname hace referencia al directorioi del archivo que ocupamos actualmente

let pathAnime = path.resolve(__dirname, "../database/anime.json");

export const findAll = async (req, res) => {
    try {
        let animes = await fs.readFile(pathAnime, 'utf-8')
        console.log(animes)
        res.status(200).json({ code: 200, message: "ok"});
        
    } catch (error) {
        res.status(500).json({ code: 500, message: "Error al leer los datos solicitados de anime"});
    }
}