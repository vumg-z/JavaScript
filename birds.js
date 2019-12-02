// migratory birds

function migratoryBirds(arr) {
    arr.sort(function (a, b) { return a - b})
    const numMap = {};
    var maxNum = 0;
    var maxChar = 0;

    // Metemos la concurrencia de los datos
    for (var num of arr) { 
         if (numMap[num]) {
             numMap[num]++;
         } else { 
             numMap[num] = 1;
         }
    }
        
    for (var num in numMap) { 
         if (numMap[num] > maxNum) { 
             maxNum = numMap[num];
             maxChar = num;
         }
     }
     return maxChar;
}

arreglo = [1,1,1,1,2,2,2,2,2];
let resultado = migratoryBirds(arreglo);
console.log(resultado);