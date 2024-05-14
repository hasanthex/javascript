function debounce(fn, delay){
    let timer;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fn();
        }, delay);
    }
}

function apiRequest(){
    console.log("Make an api request.");
}

let makeRequest = debounce(function(){ apiRequest(); }, 500);
