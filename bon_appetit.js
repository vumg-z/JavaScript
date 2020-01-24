// https://www.hackerrank.com/challenges/bon-appetit/problem

const bonAppetit = (bill, k, b) => {
    bill[k] = 0;
    const bActual = bill.reduce(sumador) / 2
    if(bActual == b){
        console.log("Bon Appetit")
    }else{
        console.log(b - bActual)
    }
}

const sumador = (total, actual) => total + actual;

let bill = [3, 10, 2, 9]
let k = 1;
b = 7;

console.log(bonAppetit(bill, k, b))