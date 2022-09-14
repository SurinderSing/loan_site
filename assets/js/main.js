// required Veriables
//
const header = document.getElementById('navbar');
const menu = document.getElementById('main-menu');
const burgerMenu = document.getElementById('burger-menu');
const burgerMenuClose = document.getElementById('burger-menu-closed');
const loader = document.querySelector('.loader-Container');
const body = document.querySelector('body');
const min_loan_amount_input = document.getElementById('apply-loan-amount');
const min_val_err = document.querySelector('.invalid-minimum-value');


// addEventListener('resize', (event) => {
//     if (event.target.innerWidth < 850) {
//         if (menu.style.display != 'none') {
//             burgerMenuClose.style.display = "block";
//         }
//         else {
//             burgerMenu.style.display = "flex";
//         }

//     }
//     else {
//         burgerMenu.style.display = "none";
//         burgerMenuClose.style.display = "none";
//         menu.style.display = "flex";
//     }
// });

// Activating the header ::--
const activeNav = () => {
    this.addEventListener('scroll', () => {
        const scroll = this.scrollY;
        if (header) {
            if (scroll >= 50) {
                header.classList.add('header-scrolled')
            }
            else {
                header.classList.remove('header-scrolled')
            }
        }
    });
}
activeNav();

// Validating Min Ammount for aplly for::--
const checkMinValue = () => {
    const min_loan_amount = parseInt(min_loan_amount_input.value);

    if (!min_loan_amount || min_loan_amount < 100000) {
        min_loan_amount_input.value = null;
        min_val_err.style.display = 'block';
    } 
}
const removeMinValErr = () =>{
    min_val_err.style.display = 'none';
}


const burgerMenuOpenHandler = () => {
    burgerMenu.addEventListener('click', () => {
        menu.style.display = "flex";
        burgerMenu.style.display = "none";
        burgerMenuClose.style.display = "flex";
    });
}
burgerMenuOpenHandler();

const burgerMenuCloseHandler = () => {
    burgerMenuClose.addEventListener('click', () => {
        menu.style.display = "none";
        burgerMenu.style.display = "flex";
        burgerMenuClose.style.display = "none";
    });

}
burgerMenuCloseHandler();


// pre loader ::-- 

const preLoader = () => {
    window.addEventListener('load', (event) => {
        loader.style.display = "none";
        body.style.overflow = "auto";
    });

};
preLoader();



