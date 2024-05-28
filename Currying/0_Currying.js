function adding(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(adding(5)(5)(5));  // 15
console.log(adding(5)(5));  // [Function (anonymous]

let after_a = adding(10);
let after_b = after_a(10);
let after_c = after_b(10);
console.log(after_c);   // 30