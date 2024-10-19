// Esta función middleware llamada movieMiddleware se utiliza para validar los datos de una película enviados en el cuerpo de una solicitud.
function movieMiddleware(req, res, next) {
    // Extrae campos específicos (title, year, poster, director, duration, genre, rate) del cuerpo de la solicitud (req.body).
    const { title, year, poster, director, duration, genre, rate } = req.body;

    // Verifica si alguno de los campos requeridos está ausente o es falsy (null, undefined, '', 0, etc.), o si el campo 'genre' es un arreglo vacío.
    if (!title || !year || !poster || !director || !duration || !genre || genre.length === 0 || !rate) {
        throw new Error("Datos faltantes"); // Si falta algún campo, lanza un Error con el mensaje "Datos faltantes"
    }

    next(); // Si todos los campos requeridos están presentes, llama a next() para proceder al siguiente middleware o manejador de ruta
}

// Exporta la función movieMiddleware para que pueda ser utilizada por otros módulos.
module.exports = movieMiddleware;
