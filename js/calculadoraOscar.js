//Calculadora web
//suma resta multiplicación y división
//Hacer una caja para cada operación, agregar borde bottom
//Primero que funcione y luego los estilos

/**SUMA */
const suma1 = document.getElementById("sumaElemento1");
const suma2 = document.getElementById("sumaElemento2");
const botonSuma= document.getElementById("btnSuma");
const cajaSuma = document.querySelector(".resultadoSuma");

botonSuma.addEventListener("click", function(){
    sumar();
});

function sumar() {
    const resultadoSuma = document.querySelector(".resultadoSuma p");
    
    let a= parseInt(suma1.value);
    let b= parseInt(suma2.value);

    if(suma1.value == "") {
        a = 0;
    }
    if(suma2.value == "") {
        b = 0;
    }

    let c = a + b;
    resultadoSuma.textContent = "El resultado de la suma es: " + (c);

}

/**RESTA */
const resta1 = document.getElementById("restaElemento1");
const resta2 = document.getElementById("restaElemento2");
const botonResta= document.getElementById("btnResta");
const cajaResta = document.querySelector(".resultadoResta");

botonResta.addEventListener("click", function(){
    restar();
});
function restar() {
    const resultadoResta= document.createElement("H3");
    let d= parseInt(resta1.value);
    let e= parseInt(resta2.value);
    let f = d - e;
    resultadoResta.textContent = "El resultado es:" + (f);
    cajaResta.appendChild(resultadoResta);
}
/**MULTIPLICACIÓN */
const multi1 = document.getElementById("multiElemento1");
const multi2 = document.getElementById("multiElemento2");
const botonMulti= document.getElementById("btnMulti");
const cajaMulti = document.querySelector(".resultadoMulti");

botonMulti.addEventListener("click", function(){
    multiplicar();
});
function multiplicar() {
    const resultadoMulti= document.createElement("H3");
    let g= parseInt(multi1.value);
    let h= parseInt(multi2.value);
    let i = g*h;
    resultadoMulti.textContent = "El resultado es:" + (i);
    cajaMulti.appendChild(resultadoMulti);
}
/**DIVISIÓN */
const div1 = document.getElementById("divElemento1");
const div2 = document.getElementById("divElemento2");
const botonDiv = document.getElementById("btnDiv");
const cajaDiv = document.querySelector(".resultadoDiv");

botonDiv.addEventListener ("click", function(){
    dividir();
});
function dividir(){
    const resultadoDiv= document.createElement("H3");
    let j = parseInt(div1.value);
    let k = parseInt(div2.value);
    let l = (j / k);
    resultadoDiv.textContent= "El resultado es:" + (l);
    cajaDiv.appendChild(resultadoDiv);
}
/**POTENCIA */
const pow1 = document.getElementById("powElemento1");
const pow2 = document.getElementById("powElemento2");
const botonPow = document.getElementById("btnPow");
const cajaPow = document.querySelector(".resultadoPow");

botonPow.addEventListener ("click", function(){
    potencia();
});

function potencia(){
    const resultadoPow= document.createElement("H3");
    let base = parseInt(pow1.value);
    let exponente = parseInt(pow2.value);
    let resultado = 1;
    if(exponente==0){
        resultado=1;
    }else{
        for(let i=0; i< exponente; i++){
            resultado = (resultado*base);
        }
    }    
    //let q = potencia1(n,m);
    
//resultadoPow.textContent="El resultado es:" + (q);
    resultadoPow.textContent= "El resultado es:" + (resultado);
    cajaPow.appendChild(resultadoPow);
}
/*
function potencia1(n,m){
    let o =1;
    let p=0;
    while(p<n){
        o = (o*m);
        p++;
    }
    return o;
}
*/