const botonSuma = document.getElementById("btnSuma");
const botonResta = document.querySelector("#btnResta");
const botonMultiplicacion = document.getElementById("btnMultiplicacion");
const botonDivision = document.getElementById("btnDivision");
const botonPotencia = document.getElementById("btnPotencia");

botonSuma.addEventListener("click", function() {
    realizarSuma();
})

botonResta.addEventListener("click", function() {
    realizarResta();
})

botonMultiplicacion.addEventListener("click", function() {
    realizarMultiplicacion();
})

botonDivision.addEventListener("click", function() {
    realizarDivision();
})

botonPotencia.addEventListener("click", function() {
    realizarPotencia();
})


function realizarSuma() {
    let operando1 = document.getElementById("suma1").value;
    let operando2 = document.getElementById("suma2").value;
    const texto = document.querySelector(".suma .resultado h3");
    texto.textContent = "El resultado es: ";

    if (operando1 == "") {
        operando1 = 0;
    }

    if (operando2 == "") {
        operando2 = 0;
    }

    let resultado = parseInt(operando1) + parseInt(operando2);

    texto.textContent = texto.textContent + resultado;
}

function realizarResta() {
    let operando1 = document.getElementById("resta1").value;
    let operando2 = document.getElementById("resta2").value;
    const texto = document.querySelector(".resta .resultado h3");
    texto.textContent = "El resultado es: ";

    if (operando1 == "") {
        operando1 = 0;
    }

    if (operando2 == "") {
        operando2 = 0;
    }

    let resultado = parseInt(operando1) - parseInt(operando2);

    texto.textContent = texto.textContent + resultado;
}

function realizarMultiplicacion() {
    let operando1 = document.getElementById("multiplicacion1").value;
    let operando2 = document.getElementById("multiplicacion2").value;
    const texto = document.querySelector(".multiplicacion .resultado h3");
    texto.textContent = "El resultado es: ";

    if (operando1 == "") {
        operando1 = 0;
    }

    if (operando2 == "") {
        operando2 = 0;
    }

    let resultado = parseInt(operando1) * parseInt(operando2);

    texto.textContent = texto.textContent + resultado;
}

function realizarDivision() {
    let operando1 = document.getElementById("division1").value;
    let operando2 = document.getElementById("division2").value;
    const texto = document.querySelector(".division .resultado h3");
    texto.textContent = "El resultado es: ";

    if (operando1 == "") {
        operando1 = 0;
    }

    if (operando2 == "") {
        operando2 = 0;
    }

    let resultado = parseInt(operando1) / parseInt(operando2);

    texto.textContent = texto.textContent + resultado;
}

function realizarPotencia() {
    let base = document.getElementById("potencia1").value;
    let exponente = document.getElementById("potencia2").value;
    const texto = document.querySelector(".potencia .resultado h3");
    texto.textContent = "El resultado es: ";
    let resultado = 1;

    if (base == "") {
        base = 0;
    }

    if (exponente == "" || exponente == 0) {
        resultado = 1;
    } else{
        for (let i = 0; i < parseInt(exponente); i++) {
            resultado = resultado * parseInt(base);
        }
    }

    texto.textContent = texto.textContent + resultado;
}