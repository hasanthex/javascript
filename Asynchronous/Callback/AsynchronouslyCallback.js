function greet(param){
    console.log(param);
}

function welcome(){
    console.log("Welcome !");
}

setTimeout(welcome, 2000);
greet("To the callback.");

// ### Output ###
// To the callback
// Welcome !