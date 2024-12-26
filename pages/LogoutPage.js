const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.settingsButton = By.xpath('//div[@aria-label="Settings"]');
        this.signOutButton = By.xpath('//div[contains(text(), "Sign out")]/parent::div');
    }

    async logout() {
        await this.driver.findElement(this.settingsButton).click();
        await this.driver.findElement(this.signOutButton).click();
    }
}

module.exports = LoginPage;
