/*

Un anagrama es una palabra o frase que resulta de la transposición de letras de otra palabra o frase.
Una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo número de apariciones,
pero en un orden diferente.

*/

function isAnagram(firstString,secondString){
    let isAnagram = false;

    if(firstString == secondString){
        isAnagram = false;
    }else if(firstString.split("").sort().join() == secondString.split("").sort().join()){
        isAnagram = true;
    }
    return isAnagram;
}

console.log(isAnagram("desamparador","desparramado"));
