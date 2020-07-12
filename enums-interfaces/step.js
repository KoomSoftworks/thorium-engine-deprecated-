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
    testId: type('number')
}, {
    extend: Action,
    extend: LocatorType,
    extend: Status
})

module.exports = Step;