// Importar el servicio movieService para interactuar con la base de datos de películas
const movieService = require("../services/moviesService");

// Exportar un objeto que contiene métodos para manejar las rutas relacionadas con las películas
module.exports = {
  // Método para obtener todas las películas
  getMovies: async (req, res) => {
    try {
      // Llamar al servicio movieService para obtener todas las películas de la base de datos
      const movies = await movieService.getMovies();
      // Enviar una respuesta con código de estado 200 y las películas obtenidas en formato JSON
      res.status(200).json(movies);
    } catch (error) {
      // En caso de error, enviar una respuesta con código de estado 500 y el mensaje de error
      res.status(500).json({ error: error.message });
    }
  },

  // Método para crear una nueva película
  createMovie: async (req, res) => {
    // Extraer campos necesarios (title, year, director, duration, genre, rate, poster) del cuerpo de la solicitud (req.body)
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
    try {
      // Llamar al servicio movieService para crear una nueva película en la base de datos
      const newMovie = await movieService.createMovies({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      // Enviar una respuesta con código de estado 200 y un mensaje de éxito
      res.status(200).json({ message: "Película añadida correctamente" });
    } catch (error) {
      // En caso de error, enviar una respuesta con código de estado 500 y un mensaje de error personalizado
      res.status(500).json({ error: "Error al crear la película" });
    }
  },
};
