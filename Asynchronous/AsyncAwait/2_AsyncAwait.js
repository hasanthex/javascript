/**
 *  1. The await keyword is used inside the async function to wait for the asynchronous operation.
 *  2. The use of await pauses the async function until the promise returns a result (resolve or reject) value..
 *  3. Note: You can use await only inside of async functions.
 *
 * **/

let promise = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("Promise Success");
   }, 5000);
});

async function example(){
    let result = await promise;
    console.log(result);
    console.log("Hello World");
}
example();

/**
 *  1. In the above program, a Promise object is created and it gets resolved after 5000 milliseconds.
 *  2. Here, the example() function is written using the async function.
 *  3. The await keyword waits for the promise to be complete (resolve or reject).
 *  4. hello is displayed only after promise value is available to the result variable
 **/