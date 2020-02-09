// https://www.hackerrank.com/challenges/cut-the-sticks/problem

const cutTheSticks = arr => {
  let sticksCut = [];

  while (arr.length != 0) {
    sticksCut.push(arr.length);
    let min = getMin(arr);
    arr = arr.map(n => n - min).filter(n => n > 0);
  }

  return sticksCut;
};

const getMin = arr => {
  let min = arr[0];
  //secuential search
  for (let i in arr) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

