// https://www.hackerrank.com/challenges/counting-valleys/problem

let test = "UDDDUDUUUDDDUDUU";

const countingValleys = s => {
  let seaLevel = 0;
  let position = seaLevel; 
  let valleys = 0;
  let down = false;

  for(let i in s){
      if(s[i] == "U"){
          position += 1;
      }else{
          position -=1;
      }

      if(position < 0){
          down = true;
      }

      if(down && position == 0){
          valleys += 1;
          down = false;
      }
  }

  return valleys;
};

console.log(countingValleys(test));
