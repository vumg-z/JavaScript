// Birthday Chocolate HackerRank exercise

// s = arreglo
// d = day 
// m = month

function chocolate(s,d,m){

    let contador = 0;

    for(let i = 0; i<s.length - (m-1); i++){
        let acumulador = 0;
        for(let j = i; j<i+m; j++){
            acumulador += s[j];
        }
        
        if(acumulador == d ){
             contador++;
        }
    }

    return contador; 
}

let arr = [2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2];
let d = 26;
let m = 8;

console.log(chocolate(arr,d,m));