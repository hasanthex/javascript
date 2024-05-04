function addNumber(num){
    return num + 10;
}

const Memo = () => {
   let cache = {};

    return function makeNumberAdd(x){
        if(cache[x]){
            return cache[x];
        } else {
            let number = addNumber(x);
            cache[x] = number;
            return number;
        }
    }
}


let memo = Memo();

console.log(memo(5));
console.log(memo(10));
console.log(memo(15));
console.log(memo(10));
console.log(memo(20));
console.log(memo(5));