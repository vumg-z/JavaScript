// https://www.hackerrank.com/challenges/find-digits/problem

const findDigits = n => {
  let array = n.toString().split("");
  let digits = 0;

  for (i in array) {
    let number = parseFloat(array[i]);
    if (n % number == 0) digits += 1;
  }

  return digits;
};
