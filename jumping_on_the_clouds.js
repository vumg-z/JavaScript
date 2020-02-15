// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

const jumpingClouds = c => {
  let jumps = 0;
  let i = 0;

  while (i < c.length) {
    if (c[i + 1] == 0 && c[i + 2] == 0) {
      i += 2;
      jumps += 1;
    } else if (c[i + 1] == 0 && c[i + 2] == 1) {
      i += 1;
      jumps += 1;
    }else if( c[i+1] == 1 && c[i +2 ] == 0){
      i += 2;
      jumps += 1;
    }else if(c[i+1] == 0 && c[i +2] == undefined){
      i += 1;
      jumps += 1;
    }else{
      i++
    }
  }

  return jumps;
};
