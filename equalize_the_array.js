// https://www.hackerrank.com/challenges/equality-in-a-array/problem

const equalizeArray = array => {
  let map = new Map();

  for (let i in array) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    } else {
      let counter = map.get(array[i]);
      counter += 1;
      map.set(array[i], counter);
    }
  }

  let mapIter = map.values();
  let min = array.length;

  for (let i = 0; i < map.size; i++) {
    let valor = mapIter.next().value;
    if (array.length - valor < min) {
      min = array.length - valor;
    }
  }

  return min;
};
