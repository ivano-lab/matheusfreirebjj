// script.js
document.getElementById('burger').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});
