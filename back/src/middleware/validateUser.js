// Esta función middleware extrae datos específicos (userName, email, password) del cuerpo de la solicitud (req.body).
function usersMiddleware(req, res, next) {
  // Desestructura userName, email y password desde req.body
  const { userName, email, password } = req.body;

  // Verifica si alguno de los campos requeridos (userName, email, password) está ausente o es falsy (null, undefined, '', 0, etc.).
  if (!userName || !email || !password) {
    // Si falta algún campo, lanza un Error con el mensaje "Datos faltantes"
    throw new Error("Datos faltantes");
  }
  // Si todos los campos requeridos están presentes, llama a next() para proceder al siguiente middleware o manejador de ruta
  next();
}

module.exports = usersMiddleware;