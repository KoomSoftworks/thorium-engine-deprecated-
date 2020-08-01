require('dotenv').config();

const implementjs = require('implement-js');
const implement = implementjs.default;

const driverBuilder = require('./driverBuilder');
const authenticate = require('./authenticate');
let Browser = require('./enums-interfaces/browser');
const webTestExecution = require('./execution/webTestExecution');

let auth = new authenticate();
if(!auth.checkToken(process.env.TOKEN))
    return;

let browser = implement(Browser)({
    id: 34,
    name: 'firefox',
    version: 4
});

driver = new driverBuilder(browser).build();

let executor = new webTestExecution(driver);

executor.execute(1);