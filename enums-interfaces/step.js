const implementjs = require('implement-js');
const { Interface, type } = implementjs;

const Step = Interface('Step')({
    id: type('number'),
    index: type('number'),
    description: type('string'),
    value: type('string'),
    locatorValue: type('string'),
    screenshot: type('boolean'),
    skip: type('boolean'),
    testId: type('number'),
    Action: type('string'),
    LocatorType: type('string'),
    Status: type('string')
})

module.exports = Step;