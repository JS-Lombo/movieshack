// Cargamos las variables de entorno desde el archivo .env
require("dotenv").config();

// Importamos la biblioteca Mongoose para la conexión a la base de datos MongoDB
const mongoose = require("mongoose");

// Obtenemos el valor de la variable URI del objeto process.env
const { URI } = process.env;

// Definimos una función asíncrona llamada dbCon para conectar a la base de datos
const dbCon = async () => {
  // Utilizamos la función connect de Mongoose para conectarnos a la base de datos utilizando la URI
  await mongoose.connect(`${URI}`);
};

// Exportamos la función dbCon para que pueda ser utilizada en otros archivos
module.exports = dbCon;
 