// https://www.hackerrank.com/challenges/alternating-characters/problem

const alternatingCharacters = (s) => {

    let deleted = 0;


    for(let i = 1 ; i<s.length; i++){
        if(s[i] == s[i - 1] ){
            deleted += 1;
        }
    }

    return deleted;
}

console.log(alternatingCharacters("BABABA"))