strings = ["ab","aab","abaaaa"]
resultados = [];

strings.forEach(element => {
    let contador = 0;
    for(let i = 0; i<element.length; i++){
        if(element.charAt(i) == element.charAt(i+1)){
            contador++;
            i++;
        }
    }
    resultados.push(contador);
});

console.log(resultados)
