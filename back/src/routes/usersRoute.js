// Importamos el módulo Router de Express
const { Router } = require('express');

// Importamos el controlador usersController 
const usersController = require("../controllers/usersController");

// Importamos el middleware validateUser
const validateUser = require("../middleware/validateUser");

// Creamos una instancia de Router llamada usersRoute
const usersRoute = Router();

// Configuramos la ruta GET '/' para que sea manejada por el controlador usersController.getAllUsers
usersRoute.get('/', usersController.getAllUsers);

// Configuramos la ruta POST '/' para que sea manejada por el controlador usersController.createUser
// También utilizamos el middleware validateUser antes de llamar al controlador
usersRoute.post('/', validateUser, usersController.createUser);

// Exportamos la instancia de Router usersRoute para que pueda ser utilizada en otros módulos
module.exports = usersRoute;
