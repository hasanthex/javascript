class StringHelper {
    setString(value, fun){
        return fun(value);
    }

    makeUpper(string){
        return `${string.toUpperCase()}`;
    }

    makeLower(string){
        return `${string.toLowerCase()}`;
    }
}

const string = new StringHelper();

const uppercase = string.setString("Hello", string.makeUpper);
const lowercase = string.setString("BANGLADESH", string.makeLower);

console.log(uppercase, lowercase);