// https://www.hackerrank.com/challenges/drawing-book/problem

const pageCount = (n, p) => {
  n = Math.floor(n / 2);
  p = Math.floor(p / 2);

  let fromStart = p;
  let fromBack = n - p;

  return fromStart > fromBack ? fromBack: fromStart
};

