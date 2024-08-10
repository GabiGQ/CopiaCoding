var contador1 = document.querySelector(".score1")
var contador2 = document.querySelector(".score2")
var desaparecer = document.querySelector("#boton1")
var caja = document.querySelector(".cuadro3")
contador1.addEventListener('click', function(evento){
    contador1.innerText = parseInt(contador1.innerText) + 1;
});

contador2.addEventListener('click', function(evento) {
    contador2.innerText = parseInt(contador2.innerText) + 1;
})

desaparecer.addEventListener('click', function(evento) {
    caja.style.display = "none";
});

setTimeout(function(evento){
    alert("The Ninjas have won");
}, 13000);