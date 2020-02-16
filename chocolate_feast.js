// https://www.hackerrank.com/challenges/chocolate-feast/problem

const chocolateFeaste = (n, c , m) =>{
    
    let wrappers = Math.floor(n / c) 
    let bars = wrappers

    while(Math.floor(wrappers / m) > 0){
        bars += (Math.floor(wrappers / m))
        wrappers = (Math.floor(wrappers / m) + Math.floor(wrappers % m ))
    }
    
    return bars;
}
