const Auth = {
    isAuthenticated: 'admin',
    authenticate() {
    this.isAuthenticated = 'admin';
    },
    signout() {
    this.isAuthenticated = false;
    },
    getAuth() {
    return this.isAuthenticated;
    }
    };
    export default Auth;