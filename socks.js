// Dado un arreglo de "calcetines", [1,1,2,2] donde cada numero es un color, comparar
// cuantos pares del mismo color se encuentran en el arreglo. 

function sockMerchant(n, ar) {

    let pares = 0;
    ar.sort(function(a,b){return a-b});

    for(let i = 0; i<n; i++){
        if(ar[i] == ar[i+1]){
            i++;
            pares++;
        }
    }

    return pares;
}
