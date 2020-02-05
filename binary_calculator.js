// binary calculator

// suma resta multiplicacion y division

function suma(a,b){
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}

function multiplicacion(a,b){
    var dec = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
    return dec.toString(2);
}

function resta(a,b){
    var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
    return dec.toString(2);
}

function division(a,b){
    var dec = Number(parseInt(a, 2)) / Number(parseInt(b, 2));
    return dec.toString(2);
}


let num1 = 1923;
let num2 = -454;
let num3 = 1914;
let num4 = 2004;
let num5 = 15;
let num6 = 1793;

let arreglo = [num1,num2,num3,num4,num5,num6];
let resultado = num1+num2+num3+num4+num5+num6;

// for(let i = 0; i<arreglo.length; i++){
//     resultado += arreglo[i];
// }

console.log(resultado);


