const botonSuma = document.getElementById("btnSuma");
const botonResta = document.getElementById("btnResta");
const botonMultiplicacion = document.getElementById("btnMultiplicacion");
const botonDivision = document.getElementById("btnDivision");
//const botonPotencia = document.getElementById("btnPotencia");
let acumulado = 0;

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
/*
botonPotencia.addEventListener("click", function() {
    realizarPotencia();
})
*/




function realizarSuma() {
    let operando1 = document.getElementById("operando1").value;
    //let operando2 = document.getElementById("operando2").value;
    let resultado = document.querySelector("#resultado");
    

    if (operando1 == "") {
        operando1 = 0;
    }

    // if (operando2 == "") {
    //     operando2 = 0;
    // }

    resultado.value = parseInt(operando1) + acumulado;
 
}

// function realizarResta() {
//     let operando1 = document.getElementById("operando1").value;
//     let operando2 = document.getElementById("operando2").value;
//     let resultado = document.querySelector("#resultado");
    

//     if (operando1 == "") {
//         operando1 = 0;
//     }

//     if (operando2 == "") {
//         operando2 = 0;
//     }

//     resultado.value = parseInt(operando1) - parseInt(operando2);
 
// }

// function realizarMultiplicacion() {
//     let operando1 = document.getElementById("operando1").value;
//     let operando2 = document.getElementById("operando2").value;
//     let resultado = document.querySelector("#resultado");
    

//     if (operando1 == "") {
//         operando1 = 0;
//     }

//     if (operando2 == "") {
//         operando2 = 0;
//     }

//     resultado.value = parseInt(operando1) * parseInt(operando2);
 
// }

// function realizarDivision() {
//     let operando1 = document.getElementById("operando1").value;
//     let operando2 = document.getElementById("operando2").value;
//     let resultado = document.querySelector("#resultado");
    

//     if (operando1 == "") {
//         operando1 = 0;
//     }

//     if (operando2 == "") {
//         operando2 = 0;
//     }

//     resultado.value = parseInt(operando1) / parseInt(operando2);
 
// }


/*
function realizarPotencia() {
    let operando1 = document.getElementById("potencia1").value;
    let operando2 = document.getElementById("potencia2").value;
    const texto = document.querySelector(".potencia .resultado h3");
    texto.textContent = "El resultado es: ";

    let resultado = parseInt(operando1);

    if (operando1 == "") {
        operando1 = 0;
    }

    if (operando2 == "" || operando2 == 0) {
        resultado = 1;
    } else{
        for (let i = 0; i < parseInt(operando2) - 1; i++) {
            resultado = resultado * parseInt(operando1);
        }
    }

    texto.textContent = texto.textContent + resultado;
}*/