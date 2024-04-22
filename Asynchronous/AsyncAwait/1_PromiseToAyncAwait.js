/**
 *  1. The async keyword is used before the function to represent that the function is asynchronous.
 *  2. Since this function returns a promise.
 *  3. you can use the chaining method then()
 *
 * **/
async function example1(){
    console.log('Async Function');
    return Promise.resolve("True");
}
example1();

example1().then((res) => {
    console.log(res);
})