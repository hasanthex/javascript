function greet(param, callback){
    callback();
    console.log(param);
}

function welcome(){
    console.log("Welcome !");
}

setTimeout(greet, 2000, "To the callback.", welcome);

// ### Output ###
// Welcome !
// To the callback