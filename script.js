const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
navLinks.classList.toggle('nav-active');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;

 if (prevScrollpos > currentScrollPos) {
     document.getElementById("main-header").style.top = "0";
 } else {
     document.getElementById("main-header").style.top = "-200px";
 }
 prevScrollpos = currentScrollPos;
} 

const toggleButton = document.getElementById('toggle');
const cards = document.querySelectorAll('.card');

toggleButton.addEventListener('click', function() {
  cards.forEach(function(card) {
    card.classList.toggle('flip');
  });

  if (toggleButton.textContent === 'Afficher l\'arrière des cartes') {
    toggleButton.textContent = 'Afficher l\'avant des carte';
  } else {
    toggleButton.textContent = 'Afficher l\'arrière des carte';
  }
});
