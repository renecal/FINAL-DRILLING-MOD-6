import fs from "fs/promises"; // manejo de archivos asincrono con promesas
import * as path from "path"; //donde estan las rutas
import { fileURLToPath } from "url"; // obtiene la informacion de la url
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//meta.url manejo de carpetas y archivos
import { v4 as uuid } from "uuid";

// __dirname hace referencia al directorioi del archivo que ocupamos actualmente

let pathAnime = path.resolve(__dirname, "../database/anime.json");

export const findAll = async (req, res) => {
  try {
    let data = await fs.readFile(pathAnime, "utf-8");
    data = JSON.parse(data);
    res.status(200).json({
      code: 200,
      message: "ok",
      animes: data.anime,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        code: 500,
        message: "Error al leer los datos solicitados de anime",
      });
  }
};

export const findByPk = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await fs.readFile(pathAnime, "utf-8");
    data = JSON.parse(data);

    let animeBuscado = data.anime.find((anime) => anime.id == id);
    if (!animeBuscado) {
      res.status(404).json({
        code: 404,
        message: "No existe el anime con el id " + id,
      });
    }

    res.status(200).json({
      code: 200,
      message: "ok",
      anime: animeBuscado,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        code: 500,
        message: "Error al leer los datos solicitados de anime",
      });
  }
};

export const createAnime = async (req, res) => {
 
  try {
    let data = await fs.readFile(pathAnime, "utf-8");
    data = JSON.parse(data);
    let { nombre, genero, anho, autor } = req.body;
    // console.log(nombre, genero)
    let nuevoAnime = {
        id: uuid().slice(0,6),
        nombre,
        genero,
        anho,
        autor
    }
    data.anime.push(nuevoAnime);
    await fs.writeFile(pathAnime, JSON.stringify(data, null, 2), "utf8");

    res.status(201).json({
        code: 201,
        message: `Se ha creado con exito el anime con id ${nuevoAnime.id}`,
        anime: nuevoAnime
});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        code: 500,
        message: "Error al crear anime",
      });
  }
};



export const deleteAnime = async (req, res) => {
    let id = req.params.id;
    try {
      let data = await fs.readFile(pathAnime, "utf-8");
      data = JSON.parse(data);
  
      //findIndex  si no encuentra el elemento devuelve un -1

    let index = data.anime.findIndex( anime => anime.id == id);
    if(index <0){
        return res.status(404).json({
            code: 404,
            message: "El anime que desea elminar no se encuentra en la BD",
          });
    }
    let animeEliminado = data.anime.splice(index, 1);
    await fs.writeFile(pathAnime, JSON.stringify(data, null, 2), "utf8");

      res.status(200).json({
        code: 200,
        message: "Se ha eliminado el anime con exito",
        anime: animeEliminado
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          code: 500,
          message: "Error al eliminar los datos solicitados de anime",
        });
    }
  };

  export const updateAnime = async (req, res) => {
    let id = req.params.id;
    try {

      let data = await fs.readFile(pathAnime, "utf-8");
      data = JSON.parse(data);
      let { nombre, genero, anho, autor } = req.body;
      let animeBuscado = data.anime.find((anime) => anime.id == id);
      if (!animeBuscado) {
        res.status(404).json({
          code: 404,
          message: "No existe el anime con el id " + id,
        });
      }
      animeBuscado.nombre = nombre || animeBuscado.nombre;      
      animeBuscado.genero = genero || animeBuscado.genero;     
      animeBuscado.anho = anho || animeBuscado.anho;  
      animeBuscado.autor = autor || animeBuscado.autor;
      
      await fs.writeFile(pathAnime, JSON.stringify(data, null, 2), "utf8");     
  
      res.status(201).json({
          code: 201,
          message: `Se ha actualizado con exito el anime con id ${animeBuscado.id}`,
          anime: animeBuscado
  });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({
          code: 500,
          message: "Error al actualizar anime",
        });
    }
  };