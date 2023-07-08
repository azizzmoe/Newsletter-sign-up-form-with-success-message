const form = document.querySelector('form')
const container = document.querySelector(".container")
const popup = document.querySelector(".popup")
const dismiss = document.querySelector(".dismiss")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    container.style.display = "none"
    popup.style.display = "block"
})

dismiss.addEventListener("click", () => {
    container.style.display = "flex"
    popup.style.display = "none"
})