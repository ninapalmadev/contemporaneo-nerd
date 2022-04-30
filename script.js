var btnMobile = document.querySelector('.btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefaut();
    var nav = document.querySelector('.nav-header');
    nav.classList.toggle('active');
    var active = nav.classList.contains('active');
   event.currentTarget.setAttribute('aria-expanded', active)
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);