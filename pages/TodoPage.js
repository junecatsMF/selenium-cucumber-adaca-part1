const { By, until } = require('selenium-webdriver');

class TodoPage {
    constructor(driver) {
        this.driver = driver;
        this.addATask = By.className('b-xX-Bd b-Bd');
        this.addATaskInputField = By.className('b-bT-Sj-jX-lX');
        this.addButton = By.className('b-bT-o-gM m-o');
        this.todoList = By.id('todo-list');
    }

    async addTodoItem(item) {

        await this.driver.wait(until.elementLocated(this.addATask), 5000);
        await this.driver.findElement(this.addATask).click();
        await this.driver.wait(until.elementLocated(this.addATaskInputField), 5000);
        await this.driver.findElement(this.addATaskInputField).sendKeys(item);
        await this.driver.findElement(this.addButton).click();
    }

    async isItemInList(item) {
        const itemElement = this.driver.findElements(By.xpath('//span[contains(@style, "user-select") and contains(text(), "'+item+'")]'))
        const todos = await itemElement;
        for (let todo of todos) {
            const text = await todo.getText();
            if (text === item) {
                return true;
            }
        }
        return false;
    }

    async deleteTodoItem() {
        //this will fail, due to time constrains did not able to get the correct element, i get intercepted by other elements
        const selectItem = this.driver.findElement(By.xpath('//span[text()="Buy cat food"]'));
        await selectItem.click();

        //click more button and delete
    }
}

module.exports = TodoPage;
