let time_now = Date.now();
let isStatus = time_now % 2;


    const promise = new Promise((resolve,  reject) => {
        if(!isStatus){
            resolve("The Number is Even");
        } else {
            reject("The Number is Odd");
        }
    });

    promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log(`It Was ${time_now}`);
    });