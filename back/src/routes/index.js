//! EN ESTE MODULO DEFINIMOS LSA RUTAS 



// Importamos el módulo Router de Express
const { Router } = require("express");

// Creamos una instancia de Router
const router = Router(); 

// Importamos el módulo moviesRoute desde el archivo "moviesRoute.js"
const moviesRoute = require("./moviesRoute");
const usersRoute = require("./usersRoute");

// Usamos el middleware 'use' de Router para establecer una ruta '/movies' que esté gestionada por el módulo moviesRoute
router.use('/movies',moviesRoute) 

// Usamos el middleware 'use' de Router para establecer una ruta '/post' que también esté gestionada por el módulo moviesRoute
router.use('/post',moviesRoute)

router.use('/users',usersRoute)

// Exportamos el objeto router para que pueda ser utilizado en otros archivos
module.exports = router;
