const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('../../pages/LoginPage');
const LogoutPage = require('../../pages/LogoutPage');
const TodoPage = require('../../pages/TodoPage');

let driver;
let loginPage;
let logoutPage;
let todoPage;
const testUrl = 'https://www.rememberthemilk.com/login/';

Given('I am logged in', async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({
        implicit: 10000, // 10 seconds implicit wait
        pageLoad: 10000, // 10 seconds page load timeout
        script: 10000,   // 10 seconds script timeout
    });

    loginPage = new LoginPage(driver);
    await driver.get(testUrl);
    //Must be handled with confidentiality but was not able to due to time constraints
    await loginPage.login('juneqatest', 'cutecat');
});

Then('I should be in the dashboard', async () => {
    await driver.getTitle('All Tasks - Remember The Milk');
});

When('I add a {string} to-do item', async (item) => {
    todoPage = new TodoPage(driver);

    await todoPage.addTodoItem(item);
});

Then('the {string} item should appear in the to-do list', async (item) => {
    const isItemAdded = await todoPage.isItemInList(item);
    if (!isItemAdded) {
        throw new Error(item+ " item is not displayed");
    }
});

When('I delete the item', async () => {
    todoPage = new TodoPage(driver);

    await todoPage.deleteTodoItem();
});

Then('the item should no longer be in the list', async () => {
    const isItemDeleted = await todoPage.isItemInList('Buy milk');
    expect(isItemDeleted).to.be.false;
});

Then('I logout', async () => {
    logoutPage = new LogoutPage(driver);

    await logoutPage.logout();
    await driver.quit();
});
