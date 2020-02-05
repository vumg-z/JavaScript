// https://www.hackerrank.com/challenges/the-hurdle-race/problem

const hurdleRace = (k, heigth) => {
  let doses = 0;
  let highest = 0;

  heigth.sort((a, b) => {
    return a - b;
  });

  highest = heigth.pop();

  if (highest <= k) doses = 0;
  else doses = highest - k;

  return doses;
};
