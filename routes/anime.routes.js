import { Router } from 'express';
const router = Router()

// ejemplo bird de https://expressjs.com/en/guide/routing.html

// define the home page route
router.get('/', (req, res) => {
  res.send('Listado de todos los animes')
})

export default router