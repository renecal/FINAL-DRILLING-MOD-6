# FINAL DRILLING MOD 6 - CRUD API FILE ANIME.JSON

Crear un programa que permita hacer el CRUD completo de los datos.


### Requisitos

* Tener inslado [NODE JS](https://nodejs.org/es)
* Editor de codigo como VS Code u alguno similar
* Instalar dependencias:
```
npm i
```
Iniciar en modo desarrollo
```
npm run dev
```
BASE DE DATOS
```
database/anime.json
```

## ENPOINT
Crear anime / createAnime
```
POST http://localhost:3000/api/v1/animes
```
Listar todos los animes / findAll
```
GET http://localhost:3000/api/v1/animes
```
Listar anime por id / findByPk
```
GET http://localhost:3000/api/v1/animes/[ID]
```
Actualizar anime / updateAnime
```
PUT http://localhost:3000/api/v1/animes/[ID]
```
Eliminar anime / deleteAnime
```
DELETE http://localhost:3000/api/v1/animes/[ID]
```

