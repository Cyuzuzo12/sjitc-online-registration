const Auth = {
    isAuthenticated: 'student',
    authenticate() {
    this.isAuthenticated = 'student';
    },
    signout() {
    this.isAuthenticated = false;
    },
    getAuth() {
    return this.isAuthenticated;
    }
    };
    export default Auth;