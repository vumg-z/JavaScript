// hacer un programa que tome numeros binarios y los convierta en numeros decimales

// metodo 1

const toDecimal = numBinary => {
  let length = numBinary.length;

  if (numBinary.length < 4) {
    for (let i = 0; i < 4 - length; i++) {
      numBinary = "0" + numBinary;
    }
  }

  arr = numBinary.split("");

  let r1 = arr[0] * Math.pow(2, 3);
  let r2 = arr[1] * Math.pow(2, 2);
  let r3 = arr[2] * Math.pow(2, 1);
  let r4 = arr[3] * Math.pow(2, 0);

  return r1 + r2 + r3 + r4;
};

// metodo dos

const toDecimal_ = num => num.toString(10);

