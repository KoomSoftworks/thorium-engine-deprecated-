let driver = require('selenium-webdriver');

let driver = driver.Builder().build();

driver.get('https:www.google.com').then(() => {
    driver.findElement(By.name('q')).sendKeys('selenium');
    console.log(driver.getTitle());
});