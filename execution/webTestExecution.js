const implementjs = require('implement-js');
const implement = implementjs.default;

const { By, Key, until } = require('selenium-webdriver');

let driver;
let testSteps;

class webTestExecution{
    constructor(driver){
        this.driver = driver;
    }
    
    async execute(testId){
        this.testSteps = getTestSteps(testId);
        testSteps.forEach(step => {
            switch (step.Action) {
                case Action.Clear:
                    break;
                case Action.Click:
                    break;
                case Action.Close:
                    break;
                case Action.ContextClick:
                    break;
                case Action.DoubleClick:
                    break;
                case Action.DragAndDrop:
                    break;
                case Action.Execute:
                    break;
                case Action.GetAttribute:
                    break;
                case Action.GetText:
                    break;
                case Action.GetTitle:
                    break;
                case Action.Insert:
                    break;
                case Action.KeyDown:
                    break;
                case Action.KeyUp:
                    break;
                case Action.Keyboard:
                    break;
                case Action.Mouse:
                    break;
                case Action.Navigate:
                    if(await this.navigate(step.value))
                        step.Status = Status.done;
                    else
                        step.Status = Status.error;
                    break;
                case Action.Quit:
                    break;
                case Action.SendKeys:
                    break;
                case Action.TakeScreenshot:
                    break;
                default:
                    step.Status = Status.notExecuted;
                    break;
            }
        });
    }

    navigate(url){
        this.driver.get(url);
        return true;
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
            testId: 1,
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
            testId: 1,
            Action: Action.navigate,
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
            skip: false,
            testId: 1,
            Action: Action.keyDown,
            LocatorType: null,
            Status: Status.notExecuted
        });
        return testStepsList = { step1, step2 }
    }
}

module.exports = webTestExecution;