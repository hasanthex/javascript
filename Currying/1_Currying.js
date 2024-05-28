function sendAutoEmail(to){
    return function(subject){
        return function(body){
            return `Sending Email to : ${to}, with subject : ${subject} with body : ${body}`;
        }
    }
}

let setTo = sendAutoEmail("hasan18353@gmail.com");
let setSubject = setTo("Implement Currying");
let setBody = setSubject("Hello from Currying function.");

console.log(setBody);
