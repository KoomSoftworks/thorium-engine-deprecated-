const implementjs = require('implement-js');
const implement = implementjs.default;

const Step = require('../enums-interfaces/step');
const Action = require('../enums-interfaces/action');

const { By, Key, until, WebElement } = require('selenium-webdriver');

let driver;
let testSteps;

class webTestExecution{
    constructor(webdriver){
        this.driver = webdriver;
    }
    
    async execute(testId){
        this.testSteps = this.getTestSteps(testId);
        testSteps.forEach(step => {
            if(step.skip)
                return;
            if(step.locatorValue != null && step.LocatorType != null)
                element = getElement(step.locatorType, step.locatorValue);
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
                    if(keyDown(step.value, element))
                        step.Status = Status.done;
                    else
                        step.Status = Status.error;
                    break;
                case Action.keyUp:
                    break;
                case Action.keyboard:
                    break;
                case Action.mouse:
                    break;
                case Action.navigate:
                    if(navigate(step.value))
                        step.Status = Status.done;
                    else
                        step.Status = Status.error;
                    break;
                case Action.quit:
                    break;
                case Action.sendKeys:
                    if(sendKeys(step.value, element))
                        step.Status = Status.done;
                    else
                        step.Status = Status.error;
                    break;
                case Action.takeScreenshot:
                    break;
                default:
                    step.Status = Status.notExecuted;
                    break;
            }
            console.log(`Step ${step.index}, ${step.Action}. Status: ${step.Status}.`);
        });
    }

    click(element){
        element.click();
        return true;
    }

    navigate(url){
        this.driver.get(url);
        return true;
    }

    sendKeys(text, element){
        if(text.includes('$key.'))
            element.sendKeys(getKey(text));
        else
            element.sendKeys(text);
        return true;
    }

    keyDown(key, element){
        if(element != null)
            element.keyDown(key);
        else
            driver.keyDown(key);
    }

    getElement(locatorType, locatorValue){
        switch(locatorType) {
            case locatorType.name:
                return driver.findElement(By.name(locatorValue));
            case locatorType.className:
                return driver.findElement(By.className(locatorValue));
            case locatorType.tagName:
                return driver.findElement(By.tagName(locatorValue));
            case locatorType.xpath:
                return driver.findElement(By.xpath(locatorValue));
            case locatorType.id:
                return driver.findElement(By.id(locatorValue));
            case locatorType.linkText:
                return driver.findElement(By.linkText(locatorValue));
            case locatorType.partialLinkText:
                return driver.findElement(By.partialLinkText(locatorValue));
        }
    }

    getKey(key){
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
    }

    getTestSteps(testId){
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
            LocatorType: null,
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
            LocatorType: null,
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
        return testStepsList = { step1, step2, step3, step4 }
    }
}

module.exports = webTestExecution;