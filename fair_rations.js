// https://www.hackerrank.com/challenges/fair-rations/problem

const fairRations = (a) => {
    let loaves = 0;
    
    for(let i = 0; i<a.length / 2; i++){
        if(a[i] % 2 != 0){ 
            if(a[i + 2] != undefined ){
                a[i + 1] += 1;
                a[i] += 1;
                loaves += 2;
            }else if(a[i + 1] % 2 != 0){
                a[i + 1] += 1;
                a[i] += 1;
                loaves += 2;
            }else{
                return "NO"
            }
        }
    }
    return loaves;
}
