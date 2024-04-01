// The setTimeout() method executes a block of code after the specified time.
// The method executes the code only once.

function greet(){
    console.log("hello from setTimeOut");
}
console.log("Start");
setTimeout(greet,1000);
console.log("End");