// hacer un arreglo de 100 numeros aleatorios, que sean integers, despues
// indicar cuantos numeros pares e impares hay.

let array = [];
let pares = 0;
let impares = 0;

for(let i = 0; i<10; i++){
    let randomNumber = getRandomNumber();

    if(randomNumber % 2 == 0)
        pares += 1;
    else
        impares += 1;

    array.push(randomNumber);
}

function getRandomNumber(){
    let n = Math.floor(Math.random() * 10);
    return n;
}

console.log(array);
console.log(pares);
console.log(impares);

