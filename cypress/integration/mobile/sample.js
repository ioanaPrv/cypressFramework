import AdbCommandsUtils from '../../support/adbCommandsUtils';
const { driverLocation } = require("selenium-webdriver/common/seleniumManager");
const adbRunCommand = new AdbCommandsUtils();

beforeEach(function() {
    adbRunCommand.runAdbCommand('adb shell am start -n com.example.palatul_culturii_quiz_app/com.example.palatul_culturii_quiz_app.MainActivity')
})
afterEach(function() {
    adbRunCommand.runAdbCommand('adb shell pm clear com.example.palatul_culturii_quiz_app');
})

describe('First test suite', () => {
    let adminButton;
    let quizButton;
    //C11245 for example
    it('Click on Admin button', async () => {
        adminButton = $("~ADMIN");
        await adminButton.click();
        quizButton = $("~Creează Quiz");
        await expect(quizButton).toBeExisting();
    })
    it('Click on Creeaza Quiz button', async () => {
        adminButton.click();
        quizButton.click();
        const numeQuiz = $("android.widget.EditText");
        await expect(numeQuiz).toBeExisting();
    })
})




