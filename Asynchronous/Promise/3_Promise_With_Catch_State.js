let isError = true;

let promise = new Promise((resolve, reject)=> {
    if(isError){
        reject("It's Reject State");
    }
});

    // executes when promise is resolved successfully
    promise
    .then((result)=> {
        console.log(result);
    })
    // executes if there is an error
    .catch((err)=> {
        console.log(err);
    });