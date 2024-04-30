async function makeApiCall(count){

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then((response) => {
            return response.json();
        });

    return data;
}

const memoization = (func) => {
    let cache = {};

    return async function(key){
        console.log(cache);
        if(cache[key]){
            console.log('Cache Exists');
            return cache[key];
        } else {
            console.log('Cache Did Not Exists');
            let result = await func(key);
            cache[1] = result;
            return result;
        }
    }
}

const getTodos = memoization(makeApiCall);

const res_1 = getTodos(1).then((res) => { return res;});
const res_2 = getTodos(1).then((res) => { return res;});

console.log(res_1);

// console.log();
// console.log(getTodos(1));