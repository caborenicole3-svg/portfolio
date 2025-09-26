document.addEventListener('DOMContentLoaded', function() {
  // ⿡ Mettre l'année automatiquement dans le footer
  document.querySelector('footer p').textContent = '© ${new Date().getFullYear()} — Ton Nom';

  // ⿢ Menu mobile
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.querySelector('header nav');

  if(navToggle) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open'); // ouvre/ferme le menu
      });
  }
});
document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
});