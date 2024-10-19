// Importamos el módulo Router de Express
const { Router } = require('express');

// Importamos el controlador moviesController desde el archivo "../controllers/moviesController"
const moviesController = require("../controllers/moviesController")

// Creamos una instancia de Router llamada moviesRoute
const moviesRoute = Router();

const movieMiddleware = require("../middleware/moviesMiddleware")
// Configuramos la ruta GET '/' para que sea manejada por el controlador moviesController
moviesRoute.get('/', moviesController.getMovies);

// Configuramos la ruta POST '/' para que también sea manejada por el controlador moviesController
moviesRoute.post('/',movieMiddleware,moviesController.createMovie);

// Exportamos la instancia de Router moviesRoute para que pueda ser utilizada en otros archivos
module.exports = moviesRoute;
