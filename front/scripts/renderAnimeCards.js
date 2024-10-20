const animeCardContainer = document.getElementById("animeCardContainer");

const renderAnimeCards = (data) => {
  data.forEach((item) => {
    // Verificar si el género de la película incluye "anime" (debe ser "anime" con minúscula para coincidir con tu condición)
    if (item.genre.includes("anime")) {
      const card = document.createElement("div");
      card.classList.add("card-body");

      card.innerHTML = `
                <img class="card-img-top" src="${item.poster}" alt="${item.title}">
                <p>${item.title}</p>
            `;

      animeCardContainer.appendChild(card);
    }
  });
};

module.exports = renderAnimeCards;
