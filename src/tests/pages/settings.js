const logoutButtonSelector = 'logoutButton';

const tapElement = async (selector) => {
    const element = await driver.$(`~${selector}`);

    await element.touchAction('tap');

    return element;
};

const tapLogoutButton = async () => {
    await tapElement(logoutButtonSelector);
};

const getLogoutButtonText = async () => {
    const element = await driver.$(`~logoutLoginText`);

    return element.getText();
};

const clickLogoutButton = async () => {
    await tapElement('logoutButton');
};

module.exports = {
    tapLogoutButton,
    getLogoutButtonText
};
