const implementjs = require('implement-js');
const implement = implementjs.default;

const Step = require('../enums-interfaces/step');
const Action = require('../enums-interfaces/action');
const Status = require('../enums-interfaces/status');
const LocatorType = require('../enums-interfaces/locatortype');

const { By, Key, until, WebElement } = require('selenium-webdriver');

let driver;
let element;

class webTestExecution{
    constructor(webdriver){
        this.driver = webdriver;
    };
    
    execute = function(testId){
        this.testSteps = this.getTestSteps(testId);
        this.testSteps.forEach(async step => {
            try {
                if(step.skip)
                    return;
                if(step.locatorValue != '' && step.LocatorType != '')
                    element = this.getElement(step.LocatorType, step.locatorValue);
                switch (step.Action) {
                    case Action.clear:
                        break;
                    case Action.click:
                        break;
                    case Action.close:
                        break;
                    case Action.contextClick:
                        break;
                    case Action.doubleClick:
                        break;
                    case Action.dragAndDrop:
                        break;
                    case Action.execute:
                        break;
                    case Action.getAttribute:
                        break;
                    case Action.getText:
                        break;
                    case Action.getTitle:
                        break;
                    case Action.insert:
                        break;
                    case Action.keyDown:
                        step.Status = await this.keyDown(step.value, element);
                        break;
                    case Action.keyUp:
                        break;
                    case Action.keyboard:
                        break;
                    case Action.mouse:
                        break;
                    case Action.navigate:
                        step.Status = await this.navigate(step.value);
                        break;
                    case Action.quit:
                        break;
                    case Action.sendKeys:
                        step.Status = await this.sendKeys(step.value, element);
                        break;
                    case Action.takeScreenshot:
                        break;
                    default:
                        step.Status = Status.notExecuted;
                        break;
                }
                console.log(`Step ${step.index}, ${step.Action}. Status: ${step.Status}.`);
            } catch (ex) {
                console.log(ex);
            }
        });
    };

    click = async function(element){
        try{
            await element.click();
            return Status.done;
        } catch (ex) {
            throw ex;
        }
        
    };

    navigate = async function(url){
        try {
            await this.driver.get(url);
            return Status.done;
        } catch (ex) {
            throw ex;
        }
    };

    sendKeys = async function(text, element){
        try{
            if(text.includes('$key.'))
                await element.sendKeys(getKey(text));
            else
                await element.sendKeys(text);
                return Status.done;
        } catch (ex) {
            throw ex;
        }
    };

    keyDown = async function(key, element){
        try{
            if(element != null)
                await element.keyDown(key);
            else
                await driver.keyDown(key);
                return Status.done;
        } catch (ex) {
            throw ex;
        }
    };

    getElement = function(locatorType, locatorValue){
        switch(locatorType) {
            case LocatorType.name:
                return driver.findElement(By.name(locatorValue));
            case LocatorType.className:
                return driver.findElement(By.className(locatorValue));
            case LocatorType.tagName:
                return driver.findElement(By.tagName(locatorValue));
            case LocatorType.xpath:
                return driver.findElement(By.xpath(locatorValue));
            case LocatorType.id:
                return driver.findElement(By.id(locatorValue));
            case LocatorType.linkText:
                return driver.findElement(By.linkText(locatorValue));
            case LocatorType.partialLinkText:
                return driver.findElement(By.partialLinkText(locatorValue));
        }
    };

    getKey = function(key){
        switch(key.split("$key.")[1]){
            case "enter":
                return Key.ENTER;
            case "return":
                return Key.RETURN;
            case "alt":
                return Key.ALT;
            case "arrowup":
                return Key.ARROW_UP;
            case "arrowdown":
                return Key.ARROW_DOWN;
            case "arrowleft":
                return Key.ARROW_LEFT;
            case "arrowright":
                return Key.ARROW_RIGHT;
        }
    };

    getTestSteps = function(testId){
        let step1 = implement(Step)({
            id: 1,
            index: 1,
            description: '',
            value: 'https://www.google.com',
            locatorValue: '',
            screenshot: false,
            skip: false,
            testId: testId,
            Action: Action.navigate,
            LocatorType: '',
            Status: Status.notExecuted
        });
        let step2 = implement(Step)({
            id: 2,
            index: 2,
            description: '',
            value: 'hannah montana linux',
            locatorValue: 'q',
            screenshot: false,
            skip: false,
            testId: testId,
            Action: Action.sendKeys,
            LocatorType: LocatorType.name,
            Status: Status.notExecuted
        });
        let step3 = implement(Step)({
            id: 3,
            index: 3,
            description: '',
            value: 'return',
            locatorValue: '',
            screenshot: false,
            skip: true,
            testId: testId,
            Action: Action.keyDown,
            LocatorType: '',
            Status: Status.notExecuted
        });
        let step4 = implement(Step)({
            id: 4,
            index: 4,
            description: '',
            value: '$key.return',
            locatorValue: 'q',
            screenshot: false,
            skip: false,
            testId: testId,
            Action: Action.sendKeys,
            LocatorType: LocatorType.name,
            Status: Status.notExecuted
        });
        return [ step1, step2, step3, step4 ];
    }
};

module.exports = webTestExecution;