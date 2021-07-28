const botonSuma = document.getElementById('btnSuma')

botonSuma.addEventListener("click", function() {
    console.log('soy el boton de sumar');
    suma();
})

function suma () {
    const caja = document.querySelector('.suma .resultado')
    sumando1 = Number(document.getElementById("s1").value);
    sumando2 = Number(document.getElementById("s2").value);
    const resultado = document.createElement("P");
    resultado.textContent = "";


    respuesta = sumando1 + sumando2; 

    resultado.textContent = respuesta;

    document.getElementById("answer").value = respuesta;
    caja.appendChild(resultado);
    
} 
   /* 

function resta()
{ var minuendo=Number(document.getElementById("r1").value);
var sustraendo=Number(document.getElementById("r2").value);
var diferencia=minuendo-sustraendo;
document.getElementById("answer").value=diferencia;} 

function multiplicacion () 
{var mutiplicador1=Number(document.getElementById("m1").value);
var multiplicador2traendo=Number(document.getElementById("m2").value);
var producto=(multiplicador1) (multiplicador2);
document.getElementById("answer").value=producto;}

function multiplicacion () 
{var dividendo=Number(document.getElementById("m1").value);
var divisor=Number(document.getElementById("m2").value);
var respuesta= dividendo%divisor;
document.getElementById("answer").value=respuesta;}*/