/**
 * Higher-order functions: Passing Functions as Arguments
 **/


function makeUpper(value){
    return ` ${value.toUpperCase()}`;
}

function makeLower(value){
    return ` ${value.toLowerCase()} `;
}

function string(string, fun){
    return fun(string);
}

console.log( string('hello', makeUpper) );  // HELLO
console.log( string('Hello Dhaka', makeLower )); // hello dhaka
