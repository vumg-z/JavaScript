//palindroma
function palindroma(s){    
    return s == s.split("").reverse().join("");
}

let string = "anita lava la tina";
string = string.split(" ").join(""); //elimina espacios en el string
console.log(palindroma(string));
