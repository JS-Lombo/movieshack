// Importamos la biblioteca Express
const express = require("express");

// Importamos el enrutador desde el archivo "./routes/index"
const router = require("./routes/index");

// Importamos la biblioteca Morgan para hacer logs de las peticiones HTTP
const morgan = require("morgan");

// Importamos la biblioteca CORS para habilitar el intercambio de recursos entre diferentes dominios
const cors = require("cors");

// Creamos una instancia de la aplicación Express
const app = express();

// Usamos Morgan para registrar los logs de las peticiones HTTP en el formato "dev"
app.use(morgan("dev"));

// Habilitamos el manejo de datos JSON en las peticiones
app.use(express.json());

// Habilitamos el middleware CORS para permitir solicitudes desde diferentes orígenes
app.use(cors());

// Montamos el enrutador en la aplicación principal de Express
app.use(router);

// Exportamos la aplicación Express para que pueda ser utilizada en otros archivos
module.exports = app;
