class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    authenticate() {
        // authentication logic
        return this.password === "secret"; // Simplified example
    }
}
