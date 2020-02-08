// https://www.hackerrank.com/challenges/permutation-equation/problem

const permutationEquation = p => {
  let newArray = [];

  for (let i = 1; i < p.length + 1; i++) {
    let firstIndex = p.indexOf(i) + 1;
    let secondIndex = p.indexOf(firstIndex);
    newArray.push(secondIndex + 1);
  }

  return newArray;
};
