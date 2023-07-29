import { Router } from 'express';
import { findAll, findByPk, createAnime } from "../controllers/anime.controller.js";
const router = Router()

// ejemplo bird de https://expressjs.com/en/guide/routing.html

// rutas anime

//todos los animes
router.get('/', findAll);

//Obtener anime por id
router.get('/:id', findByPk);

// Crear anime
router.post('/', createAnime);

export default router