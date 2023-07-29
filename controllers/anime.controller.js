import fs from "fs/promises";  // manejo de archivos asincrono con promesas
import * as path from "path";  //donde estan las rutas
import { fileURLToPath } from "url"; // obtiene la informacion de la url
const __dirname = path.dirname(fileURLToPath(import.meta.url)); 
//meta.url manejo de carpetas y archivos

// __dirname hace referencia al directorioi del archivo que ocupamos actualmente

let pathAnime = path.resolve(__dirname, "../database/anime.json");

export const findAll = async (req, res) => {
    try {
        let data = await fs.readFile(pathAnime, 'utf-8');
        data = JSON.parse(data);
        res.status(200)
            .json(
                { 
                    code: 200, 
                    message: "ok",
                    animes: data.anime
                });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ code: 500, message: "Error al leer los datos solicitados de anime"});
    }
}


export const findByPk = async (req, res) => {
    let id = req.params.id;
    try {
        let data = await fs.readFile(pathAnime, 'utf-8');
        data = JSON.parse(data);

        let animeBuscado = data.anime.find( anime => anime.id == id);
        if(!animeBuscado){
            res.status(404)
            .json(
                { 
                    code: 404, 
                    message: "No existe el anime con el id "+id,
                });
        }
 
        res.status(200)
            .json(
                { 
                    code: 200, 
                    message: "ok",
                    anime: animeBuscado
                });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ code: 500, message: "Error al leer los datos solicitados de anime"});
    }
}