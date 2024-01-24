var span = document.querySelectorAll(".conteudo span");


for (let i = 0; i < span.length; i++) 
{
    span[i].addEventListener("click", () => {
        var conteudo = document.querySelectorAll(".conteudo p");

        if (conteudo[i].classList.contains("mostrar")) 
        {
            span[i].innerHTML = "Ver mais!";
            conteudo[i].classList.remove("mostrar");
        }
        else 
        {
            span[i].innerHTML = "Ocultar";
            conteudo[i].classList.add("mostrar");
        }
    });
}
