const { Builder } = require('selenium-webdriver');
require('selenium-webdriver');
require('geckodriver');
require('chromedriver');

const driver = new Builder();

class driverBuilder{

    constructor(browser){
        driver.forBrowser(browser);
    }

    build(){
        return driver.build();
    }

}

module.exports = driverBuilder;