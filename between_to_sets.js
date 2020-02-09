// https://www.hackerrank.com/challenges/between-two-sets/problem

/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const getTotal = (a, b) => {
  b.sort((a, b) => a - b);

  let limit = b[0];
  let numeros = [];

  for (let i = limit; i > 0; i--) {
    if (a.length == 2) {
      if (i % a[0] == 0 && i % a[1] == 0) numeros.push(i);
    } else if (a.length == 1) {
      if (i % a[0] == 0) numeros.push(i);
    } else if (a.length == 3) {
      if (i % a[0] == 0 && i % a[1] == 0 && i % a[2] == 0) numeros.push(i);
    }
  }

  let final = numeros.filter(a => {
    let cnt = 0;
    for (let i = 0; i < b.length; i++) {
      if (b[i] % a == 0) {
        cnt += 1;
      }
    }

    if (cnt == b.length) return a;
  });

  return final.length;
};

let test = [3, 9, 6];
let test2 = [36, 72];

console.log(getTotal(test, test2));
