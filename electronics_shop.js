//https://www.hackerrank.com/challenges/electronics-shop/problem

const getMoneySpent = (keyboards, drives, b) => {
  //ordenamos los arreglos de keyboards y drives
  let keyboardsOrdened = keyboards.sort(sortDescend);
  let drivesOrdened = drives.sort(sortAscend);
  let max = -1;

  for (let i = 0; i < keyboardsOrdened.length; i++) {
    for (let j = 0; j < drivesOrdened.length; j++) {
      //sacar el maximo
      if (keyboardsOrdened[i] + drivesOrdened[j] <= b) {
        //estamos entre el limite que es menor o igual a budget
        if (keyboardsOrdened[i] + drivesOrdened[j] > max) {
          max = keyboardsOrdened[i] + drivesOrdened[j];
        }
      }
    }
  }

  return max;
};

const sortAscend = (a, b) => {
  return a - b;
};

const sortDescend = (a, b) => {
  return b - a;
};
