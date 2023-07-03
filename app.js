const form = document.querySelector('form')
const main = document.querySelector("main")
const popup = document.querySelector(".popup")

form.addEventListener("submit", () => {
    main.style.display = "none";
    popup.style.dispay = "block"
})