const form = document.querySelector('form')
const main = document.querySelector("main")
const popup = document.querySelector(".popup")
const dismiss = document.querySelector(".dismiss")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.style.display = "none"
    popup.style.display = "block"
})

dismiss.addEventListener("click", () => {
    main.style.display = "block"
    popup.style.display = "none"
})