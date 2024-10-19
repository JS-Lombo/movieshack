// Importar el servicio de usuario para interactuar con la base de datos de usuarios
const userService = require("../services/userService");

// Exportar un objeto que contiene métodos para manejar las rutas relacionadas con los usuarios
module.exports = {
    // Método para obtener todos los usuarios
    getAllUsers: async (req, res) => {
        try {
            // Llamar al servicio userService para obtener todos los usuarios de la base de datos
            const users = await userService.getAllUsers();
            // Enviar una respuesta con código de estado 200 y los usuarios obtenidos en formato JSON
            res.status(200).json(users);
        } catch (error) {
            // En caso de error, enviar una respuesta con código de estado 500 y el mensaje de error
            res.status(500).json({ error: error.message });
        }
    },

    // Método para crear un nuevo usuario
    createUser: async (req, res) => {
        // Extraer userName, email y password del cuerpo de la solicitud (req.body)
        const { userName, email, password } = req.body;

        try {
            // Llamar al servicio userService para crear un nuevo usuario en la base de datos
            const newUser = await userService.createUser({
                userName,
                email,
                password,
            });
            // Enviar una respuesta con código de estado 200 y un mensaje de bienvenida
            res.status(200).json({ message: "Welcome to MOVIESHACK" });
        } catch (error) {
            // En caso de error, enviar una respuesta con código de estado 500 y un mensaje genérico de error
            res.status(500).json({ error: "Something went wrong" });
        }
    }
};
