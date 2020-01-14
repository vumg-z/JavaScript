// encontrar un numero faltante en un arreglo del 0 al 100

const arreglo = [];
const arregloFaltante = [];

for(let i = 0; i<100; i++){
    arreglo.push(i);
}

for(let i = 0; i<100; i++){
    arregloFaltante.push(i);
}

// estoy eliminado el numero 15 que esta en la posicion 15 del arreglo

arregloFaltante[15] = 0; 

function getSum(total, num){
    return total + Math.round(num)
}

const suma1 = arreglo.reduce(getSum, 0)
const suma2 = arregloFaltante.reduce(getSum, 0)

console.log(suma1- suma2)