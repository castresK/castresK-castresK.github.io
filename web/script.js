const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked!');
        navMenu.classList.toggle('active'); // Toggle the active class to show/hide the nav menu
    });