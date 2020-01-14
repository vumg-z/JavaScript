// (bo(m(e(ca(mi)sa)s)uy)nita)

function getOpen(string) {
  let open = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "(") {
      // tenemos que encnontrar el ultimo parentesis primero
      open = i;
      // guardamos la posicion donde se encuentra el primer parentesis "(" ahora solamente
      // hay que buscar en donde cierra
    }
  }
  return open;
}

function getClosed(string) {
  let closed = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == ")") {
      closed = i;
      break;
    }
  }
  return closed + 1;
}

function cleanerParts(string) {
  let newPart = "";
  newPart = string.slice(getOpen(string), getClosed(string));
  return newPart;
}

function main() {
  let anotherS = [];
  let s = "(bo(m(e(ca(mi)sa)s)uy)nita)";
  let newString = ""

  while (s != "") {
    anotherS.push(cleanerParts(s));
    newString = s.replace(`${cleanerParts(s)}`, "");
    s = newString;
  }

  console.log(anotherS.join(" ").replace(/\(/g,"").replace(/\)/g,""));
}

main();


