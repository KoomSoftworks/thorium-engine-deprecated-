const implementjs = require('implement-js');
const { Interface, type } = implementjs;

const User = Interface('User')({
    id: type('number'),
    name: type('string'),
    username: type('string'),
    password: type('string'),
    email: type('string')
})

module.exports = User;