const ul = document.querySelector(".lists")
const button = document.querySelector(".button")

button.addEventListener("click", () => {
    ul.classList.toggle("active")
    button.firstElementChild.classList.toggle("spinner")

})
console.log(button.firstElementChild);