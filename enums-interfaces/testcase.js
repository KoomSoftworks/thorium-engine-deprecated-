const implementjs = require('implement-js');
const Step = require('./step');
const { Interface, type } = implementjs;

const TestCase = Interface('TestCase')({
    id: type('number'),
    name: type('string'),
    createdAt: type('date'),
    lastModified: type('date'),
    folderId: type('number'),
    steps: type('array', [type('object', Step)])
})

module.exports = TestCase;