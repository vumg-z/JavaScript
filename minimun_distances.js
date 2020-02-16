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
            }else{
                map.set(number, 0)
            }
        }

    }

    if(exists){
        let valuesArray = Array.from(map.values());
        valuesArray.sort((a,b) => a-b)
        let number = valuesArray.filter((num) => num > 0 )[0]
        return number
    }else{
        return -1
    }
}
