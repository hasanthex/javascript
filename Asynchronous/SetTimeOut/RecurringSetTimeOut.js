function everySecond(){
    let time = new Date();
    console.log(time.toLocaleString());
    setTimeout(everySecond, 3000);
}
everySecond();