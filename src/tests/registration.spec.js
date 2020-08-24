const assert = require('assert');

const { generateRandomUserData } = require('utils/generate-new-user.util');

const loginPage = require('tests/pages/login.page');
const settingsPage = require('tests/pages/settings.page');

describe('Проверка регистрации', () => {
    let randomUserData;

    before(async () => {
        randomUserData = await generateRandomUserData();
    });

    it('по email', async () => {
        await loginPage.tapRegistrationButton();
        await loginPage.fillRegistrationEmailForm(randomUserData);

        const settingsLogin = await settingsPage.getLogoutButtonText();

        assert.equal(settingsLogin, randomUserData.email);
    });

    it('по номеру телефона', async () => {
        await settingsPage.clickLogoutButton();

        await loginPage.tapRegistrationButton();
        await loginPage.fillRegistrationPhoneForm(randomUserData);

        const settingsLogin = await settingsPage.getLogoutButtonText();

        assert.equal(settingsLogin, randomUserData.phone);
    });
});
