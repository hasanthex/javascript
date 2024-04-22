let promise_success = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Success");
    }, 3000);
});

let promise_error = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise Error');
    }, 4000);
});

async function promiseExample(){
    try {
        let success = await promise_success;
        let error = await promise_error;
    } catch (e) {
        console.log(e);
    }
}

/**
 *  1. we have used try/catch block to handle the errors.
 *  2. If the program runs successfully, it will go to the try block
 *  3. And if the program throws an error, it will go to the catch block.
 **/