
// Importamos la clase Movies del archivo "../types/class"
const { Movies } = require("../types/class");

// Importamos el modelo Movie desde el archivo "../models/Movie"
const Movie = require("../models/Movie");

// Exportamos un objeto que contiene un método llamado getAllMovies
module.exports = {
  // Definimos el método getAllMovies como una función asíncrona que devuelve una lista de películas
  getMovies: async () => {
    try {
      // Utilizamos el modelo Movie para buscar todas las películas en la base de datos
      const movies = await Movie.find();
      
      // Retornamos la lista de películas obtenida
      return movies;
    } catch (error) {
      // Si ocurre un error durante la búsqueda de películas, lanzamos una nueva excepción con el mensaje de error
      throw new Error(error);
    }
  },
  createMovies: async (movie) => {
    const newMovie = await Movie.create(movie);
    await newMovie.save();
  },
};
