// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const beautifulDays = (i, j, k) => {
  let start = i;
  let end = j;

  let days = 0;

  for (let i = start; i <= end; i++) {
    let reversedNum = reversedNum(i);

    if ((i - reversedNum) % k == 0) {
      days += 1;
    }
  }

  return days;
};

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)


