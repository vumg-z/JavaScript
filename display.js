// mostrar este numero 1234, pero al reves 4321 usando aritmetica

const display = (num) => {
    while(num > 0){
        console.log(Math.floor(num % 10))
        num = Math.floor(num / 10);
    }
}

display(1234)