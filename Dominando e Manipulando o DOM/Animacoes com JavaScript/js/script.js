var elements = document.getElementsByClassName("box");

setTimeout( () => {
    elements[0].classList.add("animEsquerda");
}, 1000);

elements[1].addEventListener("click", () => {
    elements[1].classList.add("animEsquerda");
});