"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    framework: 'jasmine2',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js).
    // They may include glob patterns.
    specs: ['login.js'],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 9000000
    },
    allScriptsTimeout: 9000000
};
