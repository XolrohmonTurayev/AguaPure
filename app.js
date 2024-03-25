// HELLO JavaScript...

let closeButton = document.getElementById("close-button");
let burgerIcon = document.getElementById("burger-menu-icon");
let burgerMenu = document.getElementById("burger-menu");
let searchButton = document.getElementById("search-button")
let searchModal = document.getElementById("search-modal");
let closeModal = document.getElementById("close-modal");
let viewMassages = document.getElementById("view-massages");
let massagesPopUp = document.getElementById("massage-pop-up");
let quantity = document.getElementById("quantity-input").value;
let waterPrice = 12.5;



function calcPrice() {
    return quantity * waterPrice;
}


console.log(calcPrice());

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
});

//View massages button settings!

viewMassages.addEventListener('click', () => {
    massagesPopUp.classList.toggle("visible");
    if (massagesPopUp.classList.contains("visible")) {
        viewMassages.textContent = 'hide messages'
    } else {
        viewMassages.textContent = "view massage"
    }

});


//Transitions!
searchModal.style.transition = "0.3s"
burgerMenu.style.transition = "0.4s";
massagesPopUp.style.transition = "0.3s"


// swiper settings!
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

