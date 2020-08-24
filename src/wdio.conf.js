exports.config = {
    runner: 'local',
    port: 4723,
    services: ['appium'],
    appium: {
        command: 'appium'
    },
    specs: [
        './tests/**/*.spec.js'
    ],
    sync: true,
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        platformVersion: '8.0',
        deviceName: process.env.DEVICE_NAME,
        app: process.env.APP_URL,
        appPackage: 'ru.zarplata',
        appActivity: 'MainActivity',
        automationName: 'uiautomator2',
        newCommandTimeout: '500',
        uiautomator2ServerInstallTimeout: 4000,
        adbExecTimeout: 1200000,
        autoGrantPermissions: true,
        autoAcceptAlerts: true,
        unicodeKeyboard: true
    }],
    logLevel: 'warn',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 6000000000
    }
};
