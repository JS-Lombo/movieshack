// Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

// Obtenemos el valor de la variable PORT del objeto process.env
const { PORT } = process.env;

// Importamos la aplicación Express desde el archivo "../back/src/server"
const app = require("../back/src/server");

// Importamos la función de conexión a la base de datos desde "./src/config/dbCon"
const dbCon = require("./src/config/dbCon");

// Establecemos la conexión a la base de datos y luego iniciamos el servidor HTTP
dbCon()
  .then(() => app.listen(PORT, () => console.log(`Server is listening on ${PORT}`)))
  .catch((err) => console.log('Fallo en la conexión', err.message));
