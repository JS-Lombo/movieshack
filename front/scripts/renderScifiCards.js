const SciFiCardContainer = document.getElementById("SciFiCardContainer");

const renderSciFiCards = (data) => {
  // Verificar que el contenedor existe
  if (!SciFiCardContainer) {
    console.error("El contenedor de tarjetas SciFi no existe.");
    return;
  }

  // Verificar que 'data' es un array
  if (!Array.isArray(data)) {
    console.error("Los datos proporcionados no son un array.");
    return;
  }

  data.forEach((item) => {
    // Verificar que el item tiene las propiedades esperadas
    if (!item.genre || !item.poster || !item.title) {
      console.warn("Faltan propiedades en el item:", item);
      return;
    }

    // Verificar si el género de la película incluye "Sci-fi"
    if (item.genre.includes("Sci-fi")) {
      const card = document.createElement("div");
      card.classList.add("card-body");

      card.innerHTML = `
        <img class="card-img-top" src="${item.poster}" alt="${item.title}">
        <p>${item.title}</p>
      `;

      SciFiCardContainer.appendChild(card);
    }
  });
};

module.exports = renderSciFiCards;
