class MyMath {
    square(num){
        return () =>  num*num;
    }
    multiple(num){
        return (times) => num*times;
    }
}

const math = new MyMath();

const square = math.square(5);
const multi = math.multiple(10);

console.log( square() );
console.log( multi(9) );

