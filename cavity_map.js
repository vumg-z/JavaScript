// https://www.hackerrank.com/challenges/cavity-map/problem

// https://www.hackerrank.com/challenges/cavity-map/forum/comments/132827

const cavityMap = a => {
  let n = a.length;
  let values = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i >= 1 && i < n - 1 && j >= 1 && j < n - 1) {
        if (
          a[i][j] > a[i - 1][j] &&
          a[i][j] > a[i][j + 1] &&
          a[i][j] > a[i + 1][j] &&
          a[i][j] > a[i][j - 1]
        )
          arr.push("X");
        else arr.push(a[i][j]);
      } else arr.push(a[i][j]);
    }
    values.push(arr.join(""));
  }

  return values;
};
