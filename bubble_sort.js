//bubble sort in javascript
function bubble(a){
    
    for(let i = 0; i<a.length; i++){
        for(let j = 0; j<a.length-1; j++){
            if(a[j] > a[j+1]){
                //swap
                let aux = a[j];
                a[j] = a[j+1];
                a[j+1] = aux;
            }
        }
    }
    
    return a;
}