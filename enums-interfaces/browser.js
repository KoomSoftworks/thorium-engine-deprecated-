const implementjs = require('implement-js');
const { Interface, type } = implementjs;

let Platform = require('./platform');

const Browser = Interface('Browser')({
    id: type('number'),
    name: type('string'),
    version: type('number')
}, {
    extend: Platform
})

module.exports = Browser;