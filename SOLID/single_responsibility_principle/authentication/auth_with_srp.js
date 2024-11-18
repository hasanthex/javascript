class User {
    constructor(username) {
        this.username = username;
    }
}

class AuthService {
    constructor(user) {
        this.user = user;
    }

    authenticate(password) {
        // authentication logic
        return password === "secret"; // Simplified example
    }
}

const user = new User("john_doe");
const authService = new AuthService(user);
console.log("Authenticated:", authService.authenticate("secret"));
