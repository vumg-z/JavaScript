// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

let list = [ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];

const map = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
  e: undefined,
  f: undefined,
  g: undefined,
  h: undefined,
  i: undefined,
  j: undefined,
  k: undefined,
  l: undefined,
  m: undefined,
  n: undefined,
  o: undefined,
  p: undefined,
  q: undefined,
  r: undefined,
  s: undefined,
  t: undefined,
  u: undefined,
  v: undefined,
  w: undefined,
  x: undefined,
  y: undefined,
  z: undefined
};

const designerPdfViewer = (h, word) => {
  // llenamos el map
  let j = 0;
  for (let i in map) {
    map[i] = list[j];
    j++;
  }

  // hacemos la comparacion de cual letra es la de mayor tamaño

  word = word.split("");

  let maxH = 0;

  for (let i = 0; i < word.length; i++) {
      let currentChar = word[i];
      if(map[`${currentChar}`] > maxH){
          maxH = map[`${currentChar}`]
      }
  }

  console.log(maxH * word.length)
};

designerPdfViewer(list, "abc");
