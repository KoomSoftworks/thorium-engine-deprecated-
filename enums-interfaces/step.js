const implementjs = require('implement-js');
const { Interface, type } = implementjs;

const Action = require('./action');
const LocatorType = require('./locatortype');
const Status = require('./status');

const Step = Interface('Step')({
    id: type('number'),
    index: type('number'),
    description: type('string'),
    value: type('string'),
    locatorValue: type('string'),
    screenshot: type('boolean'),
    skip: type('boolean'),
    testId: type('number'),
    Action: type('object'),
    LocatorType: type('object'),
    Status: type('object')
})

module.exports = Step;