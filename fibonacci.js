
// La serie comienza con los numeros 0 y 1, y a partir de estos cada termino
// es la suma de los dos anteriores. ejemplo:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 , 55, 89, 144, 233, 377, 610, 987, 1597

let array = [];

// La serie de fibonacci comienza con los numeros 0 y 1.

array[0] = 0;
array[1] = 1;

//comenzamos a llenar el arreglo de la serie de fibonacci con un limite de 100 numeros

for(let i = 1; i<=10; i++){
    array[i+1] = array[i-1]+array[i]; 
}

for(let i = 0; i<array.length; i++)
    console.log(array[i]);
