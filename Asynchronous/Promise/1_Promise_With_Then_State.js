const isSuccess = true;

const promise = new Promise((resolve, reject)=>{
   if(isSuccess){
       resolve("From resolve state.");
   }
});

promise.then((result) => {
    console.log(result);
}).catch((err) => {
   console.log(err);
});