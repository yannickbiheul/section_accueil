/* ---------- MENU BURGER ---------- */

const boutonBurger = document.querySelector(".boutonBurger");

boutonBurger.addEventListener("click", () => {
    boutonBurger.classList.toggle("active");
})