//  let var y const

function scope(){
    let myVariable = 4;
    let myVariable = 3;
    console.log(myVariable); //3
}

scope();