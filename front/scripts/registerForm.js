 
// Espera a que se cargue completamente el contenido HTML antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene referencias a los elementos del formulario por su ID
    const userName = document.getElementById("username");
    const email = document.getElementById("email");
    const email1 = document.getElementById("email1");
    const password = document.getElementById("password");
    const password1 = document.getElementById("password1");

    // Función para limpiar los campos del formulario
    function clearInput() {
        userName.value = "";
        email.value = "";
        email1.value = "";
        password.value = "";
        password1.value = "";
    }

    // Función para manejar el registro de un nuevo usuario
    function register() {
        // Verifica si los campos de correo electrónico no coinciden
        if (email.value !== email1.value) {
            alert("E-mail doesn't match");
            return; // Detiene la ejecución de la función si los correos electrónicos no coinciden
        }

        // Verifica si los campos de contraseña no coinciden
        if (password.value !== password1.value) {
            alert("Password doesn't match");
            return; // Detiene la ejecución de la función si las contraseñas no coinciden
        }else{

        // Realiza una petición POST utilizando Axios para registrar el nuevo usuario en el servidor
        axios
             .post("http://localhost:3000/users", {
            userName: userName.value,
            email: email.value,
            password: password.value,
        })
        .then(() => {
            // En caso de éxito, muestra un mensaje de bienvenida y limpia los campos del formulario
            alert("WELCOME TO MOVIESHACK");
            clearInput(); // Llama a la función clearInput para limpiar los campos del formulario
        })
        .catch((error) => {
            // En caso de error, muestra un mensaje indicando que faltan datos en el formulario
            throw new Error(alert("All spaces required"));
        });
    }
    }

    // Asigna la función register al evento click del botón de registro
    // Esto hace que la función register se ejecute cuando se haga clic en el botón
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", register);
});
