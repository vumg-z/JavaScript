// decimal to binary

let decimal = 10;
let binario = [];
let cociente = 0;

while(decimal > 0){
     cociente = Math.floor(decimal / 2);
     let aux = decimal % 2;
     binario.push(aux)
     decimal = cociente;
}

console.log(binario.join().replace(/,/g, ""))