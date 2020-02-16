// https://www.hackerrank.com/challenges/service-lane/problem

// Añadi el parametro width por que la funcion original no la tenia

const serviceLane = (n, cases, width) => {
  let results = [];

  for (let i = 0; i < cases.length; i++) {
    let currentTest = cases[i];

    let start = currentTest[0];
    let end = currentTest[1];

    let currentArray = width.slice(start, end + 1);

    results.push(currentArray.sort((a, b) => a - b)[0]);
  }

  return results;
};
