let isSuccess = true;

let promise = new Promise((resolve, reject)=> {
    if(isSuccess){
        resolve("It's Resolve State");
    }
});

// executes when promise is resolved successfully
promise
    .then((result)=> {
        console.log(result);
    })
    // execute after previous then() method
    .then(()=> {
        console.log('Another then() method 1');
    })
    // execute after previous then() method
    .then(()=> {
        console.log('Another then() method 2');
    });