// Sélectionne l'en-tête
var header = document.querySelector("header");

// Stocke la hauteur de l'en-tête
var headerHeight = header.offsetHeight;

// Ajoute un écouteur d'événements pour le défilement de la page
window.addEventListener("scroll", function() {
  if (window.scrollY > headerHeight) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }
});