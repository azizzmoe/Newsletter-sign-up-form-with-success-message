const form = document.querySelector('form')
const container = document.querySelector(".container")
const popup = document.querySelector(".popup")
const dismiss = document.querySelector(".dismiss")
const emailDisplay = document.querySelector(".email-display")
const emailInput = document.querySelector('#email');
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const alert = document.querySelector(".invalid-email")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!emailRegex.test(emailInput.value)) {
        // Show an error message or highlight the email input
    } else {
        container.style.display = "none"
        popup.style.display = "block"
        emailDisplay.textContent = emailInput.value;
    }
})

dismiss.addEventListener("click", () => {
    container.style.display = "flex"
    popup.style.display = "none"
})

emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid-border', 'invalid-input');
        alert.style.display = "flex"
    } else {
        emailInput.classList.remove('invalid-border', 'invalid-input');
        alert.style.display = "none"
    }
});
