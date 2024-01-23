var elements = document.getElementsByClassName("box");

for (var i = 0; i < elements.length; i++)
{
    elements[i].style.width = "150px";
    elements[i].style.height = "150px";
    elements[i].style.backgroundColor = "red";
    elements[i].style.marginLeft = "50px";
    elements[i].style.marginTop = "50px";
    elements[i].style.marginBottom = "50px";
    elements[i].style.border = "5px solid black";
}