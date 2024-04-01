function greet(param, callback){
    callback();
    console.log(param);
}

function welcome(){
    console.log("Welcome !");
}

greet("To the callback.", welcome);

// ### Output ###
// Welcome !
// To the callback