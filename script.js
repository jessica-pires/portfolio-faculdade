document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navResponsive = document.querySelector('.nav-responsive');

    menuHamburguer.addEventListener('click', () => {
        menuHamburguer.classList.toggle('change');
        navResponsive.classList.toggle('show'); // Alterna a classe 'show'
    });
});
