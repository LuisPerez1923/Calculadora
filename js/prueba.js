const boton = document.querySelector("#btnRegistrar");
const campo = document.getElementById("entradaTexto");
const caja = document.querySelector(".resultado");

boton.addEventListener("click", function() {
    mandarMensaje();
})


function mandarMensaje() {
    const nuevoTexto = document.createElement("H2"); //crear un elemento

    nuevoTexto.textContent = "Tu mensaje fue: " + campo.value;

    caja.appendChild(nuevoTexto);
}
