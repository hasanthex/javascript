/**
 * this currying function was the shorthand or modern js format of 1_Currying.js file.
 */
const sendAutoEmail = to => subject => body =>
    `Sending Email to : ${to}, with subject : ${subject} with body : ${body}`;

let setTo = sendAutoEmail("hasan18353@gmail.com");
let setSubject = setTo("Implement Currying");
let setBody = setSubject("Hello from Currying function.");

console.log(setBody);
