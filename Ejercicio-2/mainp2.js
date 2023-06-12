let container = document.getElementById("cardContainer");
let info = [
  {
    img: "imgPrac2/purga1.jpg",
    title: "La noche de las bestias (2013)",
    Resumen:
      "En un país asolado por la delincuencia y el hacinamiento en las cárceles, el Gobierno sanciona un período anual de 12 horas durante el cual toda la actividad criminal es legal, hasta el asesinato. James, Mary y sus dos hijos luchan por sobrevivir y no convertirse en monstruos.",
  },
  {
    img: "imgPrac2/purga2.jpg",
    title: "12 horas para sobrevivir",
    Resumen:
      "Durante una noche de caos sancionada por el gobierno, la misión de un hombre para vengar a su hijo muerto se transforma en una búsqueda para proteger a unos desconocidos de unos asaltantes violentos.",
  },
  {
    img: "imgPrac2/purga3.jpg",
    title: "12 horas para sobrevivir: el año de la elección.",
    Resumen:
      "Hace 18 años, Charlie Roan presenció el asesinato de su familia durante la noche de la Purga. En el presente, Charlie es candidata a la presidencia y quiere acabar con el régimen impuesto hace 20 años, que utiliza este día para eliminar a los más pobres y recortar el gasto público, pero antes deberá sobrevivir a doce horas de terror absoluto.",
  },
  {
    img: "imgPrac2/purga4.jpg",
    title: "12 horas para sobrevivir: el inicio.",
    Resumen:
      "La violencia y el caos se han adueñado de EE. UU. El nuevo Gobierno instaura una norma para mantener el orden: durante una noche, será legal cometer cualquier crimen. No obstante, las víctimas de esta atrocidad no van a dejarse matar sin pelear.",
  },
  {
    img: "imgPrac2/purgaUltimas.jpg",
    title: "La purga por siempre",
    Resumen:
      "Adela y su esposo, Juan, viven en Texas, donde él trabaja como peón de rancho para la adinerada familia Tucker. En la mañana después de la Purga, una banda de asesinos enmascarados ataca a los Tucker, obligando a ambas familias a unirse y luchar.",
  },
  {
    img: "imgPrac2/purgaimg6serie.jpg",
    title: "the purge : La Serie.",
    Resumen:
      "La serie cuenta los eventos que tienen lugar durante una noche en la que, durante doce horas, los crímenes son legales en Estados Unidos, incluyendo el asesinato. Miguel es un marine que regresa a la ciudad para poder salvar a su hermana menor Penélope de unirse a una secta a favor de La Purga.",
  },
];

info.forEach((peliculas) => {
  let newCard = document.createElement("div");
  newCard.classList.add("card");

  let newImg = document.createElement("img");
  newImg.src = peliculas.img;
  newImg.width = "imagen";

  let newText = document.createElement("div");
  newText.classList.add("cardText");
  let newTitle = document.createElement("h1");
  newTitle.textContent = peliculas.title;
  let newResumen = document.createElement("p");
  newResumen.textContent = peliculas.Resumen;
  newText.appendChild(newTitle);
  newText.appendChild(newResumen);

  newCard.appendChild(newImg);
  newCard.appendChild(newText);
  container.appendChild(newCard);
});
