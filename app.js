// HELLO JavaScript...

//burgerMenu settings!
let burgerIcon = document.getElementById("burger-menu-icon");
let burgerMenu = document.getElementById("burger-menu");

burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("visible");
    if (burgerMenu.classList.contains("visible")) {
        burgerMenu.style.transform = "translateX(0)"
    } else {
        burgerMenu.style.transform = "translateX(-100%)"
    }
});

burgerMenu.style.transition = "0.4s";