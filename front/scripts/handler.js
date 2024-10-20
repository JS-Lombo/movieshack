// Importar la librería axios para hacer peticiones HTTP
const axios = require("axios");
// Importar las funciones renderCards y renderAnimeCards desde sus respectivos archivos
const renderCards = require("./renderCards");
const renderAnimeCards = require("./renderAnimeCards");

// Definir una función asíncrona getFilms que obtiene las películas de la API local
const getFilms = async () => {
  try {
    // Realizar una petición GET a la API local para obtener las películas
    const { data } = await axios.get("http://localhost:3000/movies");
    // Imprimir los datos obtenidos por la petición (para verificación en consola)
    console.log(data);
    // Llamar a las funciones renderCards y renderAnimeCards para renderizar las tarjetas de películas
    renderCards(data);
    renderAnimeCards(data);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la petición
    console.log(error.message);
  }
};

// Exportar la función getFilms para que pueda ser utilizada en otros módulos
module.exports = getFilms;
