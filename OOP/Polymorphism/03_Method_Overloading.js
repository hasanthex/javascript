function greet(name, country){
    if(typeof country === 'undefined'){
        return `Hello ${name}`;
    }
    else {
        return `Hello I am ${name} from ${country}`;
    }
}

console.log(greet('Abraham'));
console.log(greet('John', 'USA'));

/**
 * Output
 *  Hello Abraham !
 *  Hello I am John from USA
 */