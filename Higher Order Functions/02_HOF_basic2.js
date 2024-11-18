/**
 * Higher-order functions: Returning Functions
 **/

function square(num){
    return function(){
        return num*num;
    }
}

function multiple(num){
    return function(times){
        return num*times;
    }
}

const s1 = square(3);
const multi = multiple(10);

console.log(s1());
console.log(multi(5));
