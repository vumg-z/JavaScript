// https://www.hackerrank.com/challenges/strange-advertising/problem

const viralAdvertising = (n) => {
    let shared = 5;
    let liked = 0;
    let total = 0;

    for(let i = 1; i<= n; i++){
        liked = Math.floor(shared / 2);
        shared = liked * 3;
        total += liked;
    }

    return total;
}
