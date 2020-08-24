const registrationButton = 'registrationButton';
const settingsButton = 'settingsButton';

const tapFixedButton = async (selector) => {
    const element = await driver.$(`~${selector}`);
    await element.touchAction('tap');
};

const tapRegistrationButton = async () => {
    await driver.wait(1000);
    await tapFixedButton(registrationButton);
};

const tapElement = async (selector) => {
    const element = await driver.$(`~${selector}`);

    await element.touchAction('tap');

    return element;
};

const fillTextField = async (selector, value) => {
    if (!value) {
        return;
    };

    const inputField = await tapElement(selector);

    await inputField.setValue(value);
};

const fill = async (field, data) => {
    await tapElement(field);
    await fillTextField(field, data);
};

const fillRegistrationEmailForm = async (data) => {
    await fill('emailTab');
    await fill('email', data.email);
    await fill('password', data.password);
    await fill('confirmRegistration');
    await fill('continue');
};

const fillRegistrationPhoneForm = async (data) => {
    await fill('phoneTab');
    await fill('phone', data.phone);
    await fill('password', data.password);
    await fill('confirmRegistration');
    await fill('continue');
};

module.exports = {
    tapRegistrationButton,
    fillRegistrationEmailForm,
    fillRegistrationPhoneForm
};
