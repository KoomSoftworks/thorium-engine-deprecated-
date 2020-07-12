const implementjs = require('implement-js');
const { Interface, type } = implementjs;

const Project = {
    id: type('number'),
    name: type('string'),
    description: type('string'),
    startDate: type('object'),
    endDate: type('object')
}

module.exports = Project;