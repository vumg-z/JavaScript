// https://www.hackerrank.com/challenges/angry-professor/problem

const angryProfessor = (k, a) => {
  let onTime = 0;
  while (a.length != 0) {
    let current = a.pop();
    if (current <= 0) {
      onTime += 1;
    }
  }

  if (onTime >= k) {
    return "NO";
  } else {
    return "YES";
  }
};
