var menuButton = document.querySelector('.navButton');
var mobileMenu = document.querySelector('.mobile_menu');


function mobileNav(){
    mobileMenu.classList.add('opennow')
}
function mobileNavclose(){
    mobileMenu.classList.remove('opennow')
}

menuButton.addEventListener('click', mobileNav);
mobileMenu.addEventListener('click',mobileNavclose);