// binary calculator

// suma resta multiplicacion y division

function suma(a,b){
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}

function multiplicacion(a,b){
    var dec = Number(parseInt(a, 2)) * Number(parseInt(b, 2));
    return dec.toString(2);
}

function resta(a,b){
    var dec = Number(parseInt(a, 2)) - Number(parseInt(b, 2));
    return dec.toString(2);
}

function division(a,b){
    var dec = Number(parseInt(a, 2)) / Number(parseInt(b, 2));
    return dec.toString(2);
}
