require('dotenv').config();

const implementjs = require('implement-js');
const implement = implementjs.default;
const { Interface, type } = implementjs;

const { By, Key, until } = require('selenium-webdriver');
const driverBuilder = require('./driverBuilder');
const authenticate = require('./authenticate');
let Browser = require('./enums-interfaces/browser');


// process.argv.forEach((value, index, array) => {
//     console.log(`${index}: ${value}`);
// });

let auth = new authenticate();
auth.login(process.env.USERNAME, process.env.PASSWORD);

//let driver = new Builder().forBrowser('firefox').build();

let browser = implement(Browser)({
    id: 34,
    name: 'firefox',
    version: 4
});

let driver = new driverBuilder(browser.name).build();



(async function test() {

    //let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('cold ones', Key.RETURN);
        await driver.wait(until.titleIs(''), 5000);
    } catch (ex) {
        console.log(ex);
    } finally {
        await driver.quit();
    }

})();



