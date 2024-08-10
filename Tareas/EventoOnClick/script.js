console.log("Hola mundo")

var login= document.querySelector("#iniciarSesion");
var definicion= document.querySelector("#definicion");
var btnmegusta1 = document.querySelector(".btn-megusta1");
var numeroSpan1 = document.querySelector('.numero1');
var btnmegusta2 = document.querySelector(".btn-megusta2");
var numeroSpan2 = document.querySelector('.numero2');

login.addEventListener('click', function btnIniciarSesion(evento){
    if (evento.target.innerText === "Iniciar Sesión") {
        evento.target.innerText = "Cerrar Sesión"
    } else {
        evento.target.innerText = "Iniciar Sesión"
    }

})


definicion.addEventListener('click', function btnDefinicion(evento){
    definicion.style.display = "none"; 
});


btnmegusta1.addEventListener('click', function(evento){
    numeroSpan1.innerText ++;
})
btnmegusta2.addEventListener('click', function(evento){
    numeroSpan2.innerText ++;
})

