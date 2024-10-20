
const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");
const genres = Array.from(document.querySelectorAll('input[name="genre"]')); // Convertir NodeList a Array


function clearInput() {
    // Limpiar los campos del formulario
    title.value = "";
    year.value = "";
    director.value = "";
    duration.value = "";
    rate.value = "";
    poster.value = "";

    // Desmarcar todos los géneros seleccionados
    genres.forEach(genre => {
        genre.checked = false;
    });

}


function send() {
    const selectedGenres = genres.filter(genre => genre.checked).map(genre => genre.value);
    console.log("Géneros seleccionados:", selectedGenres);
   
   
    axios
      .post("http://localhost:3000/movies", {
        title: title.value,
        year: year.value,
        director: director.value,
        duration: duration.value,
        genre: selectedGenres,
        rate: rate.value,
        poster: poster.value,
      })
      .then(() => {
        alert("Películas creadas correctamente");
        clearInput(); // Limpiar los campos después de enviar el formulario
      })
      .catch((error) => {
        throw new Error(alert ("All spaces are required"));
      });
  }
  