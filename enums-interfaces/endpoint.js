const Endpoint = Object.freeze({
    baseUrl: 'thorium-api.herokuapp.com',
    getAuth: '/api/test/user',
    postSignUp: '/api/auth/signup',
    postSignIn: '/api/auth/signin'
});

module.exports = Endpoint;