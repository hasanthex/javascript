/**
 * Each class or mmodule should only have one responsibility.
 **/

// Bad example
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    getUserDetails(){
        console.log(`Customer name: ${this.name}`);
    }

    sendWelcomeEmail(){
        console.log(`Sending welcome email to "${this.email}"`);
    }
}

const user = new User('Mr. Doo', 'doo@email.com');

user.sendWelcomeEmail();


// Good Example
class UserSRP {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class EmailService {
    sendWelcomEmail(user){
        console.log(`Sending welcome email to "${user.email}"`);
    }
}

const userSRP = new UserSRP("Mr. Zoo", "zoo@email.com");
const emailService = new EmailService();
emailService.sendWelcomEmail(userSRP);