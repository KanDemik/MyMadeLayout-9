let headerRow = document.querySelector('.header__row');
let headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener("click", headerBurgerOpen);

function headerBurgerOpen(e) {
    e.preventDefault();
    headerBurger.classList.toggle('open');
    headerRow.classList.toggle('active');
}