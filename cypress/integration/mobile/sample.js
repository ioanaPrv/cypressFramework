const { driverLocation } = require("selenium-webdriver/common/seleniumManager");

describe('Sample', () => {
    it('Sample test', async () => {
        await driver.pause(5000)
    })
    it('Click on Admin button', async () => {
        const button = $("~ADMIN")
        button.click()
        const quizButton = $("~Creează Quiz")
        await expect(quizButton).toBeExisting();
    })
});


