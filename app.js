// HELLO JavaScript...

//Variables!
let burgerIcon = document.getElementById("burger-menu-icon");
let burgerMenu = document.getElementById("burger-menu");
let closeButton = document.getElementById("close-button");
let searchButton = document.getElementById("search-button")
let searchModal = document.getElementById("search-modal");
let closeModal = document.getElementById("close-modal")

closeButton, searchButton, burgerMenu.classList.toggle("visible");


//Burger menu settings!
burgerIcon.addEventListener("click", () => {
    if (burgerMenu.classList.contains("visible")) {
        burgerMenu.style.transform = "translateX(0)";
    } else {
        burgerMenu.style.transform = "translateX(-100%)"
    }
});

//Close button settings!
closeButton.addEventListener("click", () => {
    if (burgerMenu.classList.contains("visible")) {
        burgerMenu.style.transform = "translateX(-100%)";
    } else {
        burgerMenu.style.transform = "translateX(0)"
    }
});

//Searching modal settings!
searchButton.addEventListener("click", () => {
    searchModal.style.transform = "translateY(0)";
});
//close Modal
closeModal.addEventListener("click", () => {
    searchModal.style.transform = "translateY(-200%)";
})

//Transition!
searchModal.style.transition = "0.3s"
burgerMenu.style.transition = "0.4s";


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });