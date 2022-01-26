const burger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
});

const form = document.querySelector("#contact");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");

form.addEventListener("submit", (event) => {
    modal.classList.add("open");
    body.style.overflow = "hidden";
    event.preventDefault();
    modal.addEventListener("click", () => {
        closeModal();
    });
});
function closeModal() {
    modal.classList.remove("open");
    body.style.overflow = "";
}
document.querySelector("#year").textContent = new Date().getFullYear();
