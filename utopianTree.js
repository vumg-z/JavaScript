// https://www.hackerrank.com/challenges/utopian-tree/problem

const getHeight = (cycles) => {

    let height = 1;

    for(let i = 0; i<cycles; i++){
        if(i % 2 == 0){
            height *=2;
        }else{
            height += 1;
        }
    }

    return height;
}

let test1 = getHeight(0);
let test2 = getHeight(1);
let test3 = getHeight(4);

console.log(test1, test2, test3)