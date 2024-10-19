// Importamos la clase Users del archivo ../types/userClass
const { Users } = require("../types/userClass");

// Importamos el modelo User desde el archivo ../models/User
const User = require("../models/User");

// Exportamos un objeto que contiene dos métodos: getAllUsers y createUser
module.exports = {
  // Definimos el método getAllUsers como una función asíncrona que devuelve una lista de todos los usuarios
  getAllUsers: async () => {
    try {
      // Utilizamos el modelo User para buscar todos los usuarios en la base de datos
      const users = await User.find();

      // Retornamos la lista de usuarios obtenida de la base de datos
      return users;
    } catch (error) {
      // Si ocurre un error durante la búsqueda de usuarios, lanzamos un nuevo Error con el mensaje de error
      throw new Error(error);
    }
  },

  // Definimos el método createUser como una función asíncrona que crea un nuevo usuario en la base de datos
  createUser: async (user) => {
    try {
      // Creamos un nuevo usuario utilizando el modelo User y los datos proporcionados en el parámetro 'user'
      const newUser = await User.create(user);

      // Guardamos el nuevo usuario en la base de datos
      await newUser.save(); 

      // No es necesario devolver explícitamente ningún valor en este caso
      // El nuevo usuario se guarda correctamente en la base de datos
    } catch (error) {
      // Si ocurre un error durante la creación del usuario, lanzamos un nuevo Error con un mensaje de error personalizado
      throw new Error("Error al crear el usuario");
    }
  },
};
