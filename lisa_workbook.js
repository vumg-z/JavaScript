// https://www.hackerrank.com/challenges/lisa-workbook/

const workbook = (n, k, arr) => {
  let page = 1;
  let specials = 0;
  let limit = 1;

  for (let i = 0; i < arr.length; i++) {
    let problems = arr[i];
    for (let j = 1; j <= problems; j++) {

      if (j == page) specials += 1;

      if (limit >= k) {
        limit = 1;
        page += 1;
      } else if (j >= problems) {
        limit = 1;
        page += 1;
      } else {
        limit += 1;
      }
    }
  }

  return specials;
};

