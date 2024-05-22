class Observer {
    constructor(){
        this.observers = [];
    }

    subscriber(func){
        this.observers.push(func);
    }

    unsubscriber(func){
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(data){
        this.observers.forEach((observer) => {
            observer(data);
        });
    }
}

let observer = new Observer();

observer.subscriber(function(_data){
    console.log(`1st subscriber # ${_data}`);
});

observer.subscriber(function(_data){
   console.log(`2nd subscriber # ${_data}`);
});

setTimeout(function(){
    observer.notify('params from the observer notify');
}, 2000);