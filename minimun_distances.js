// https://www.hackerrank.com/challenges/minimum-distances/problem


const minimumDistance = a => {
    let map = new Map;
    let exists = false;

    for(let i = 0; i<a.length; i++){

        let number = a[i];
        if(!map.has(number)){
            let firstPair = a.indexOf(number);
            let secondPair = a.lastIndexOf(number)

            if(firstPair != secondPair){
                map.set(number, secondPair - firstPair)
                exists = true;
            }
        }

    }

    if(exists){
        let valuesArray = Array.from(map.values());
        return valuesArray.sort((a,b) => a-b)[0]
    }else{
        return -1
    }
}
