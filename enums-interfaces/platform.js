const implementjs = require('implement-js');
const { Interface, type } = implementjs;

const Platform = Interface('Platform')({
    id: type('number'),
    name: type('string'),
    version: type('number')
})

module.exports = Platform;