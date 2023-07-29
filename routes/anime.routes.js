import { Router } from 'express';
import { findAll } from "../controllers/anime.controller.js";
const router = Router()

// ejemplo bird de https://expressjs.com/en/guide/routing.html

// define the home page route
router.get('/', findAll);

export default router