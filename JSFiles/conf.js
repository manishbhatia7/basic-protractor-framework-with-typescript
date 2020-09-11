"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
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
        defaultTimeoutInterval: 9000000,
    },
    allScriptsTimeout: 9000000
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxDQUFDLE1BQU0sR0FBQztJQUNYLDRDQUE0QztJQUM3QyxTQUFTLEVBQUMsVUFBVTtJQUNuQixhQUFhLEVBQUMsSUFBSTtJQUNkLHVEQUF1RDtJQUN6RCx1RUFBdUU7SUFDekUsNkNBQTZDO0lBQzdDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDbkIsU0FBUyxFQUFDO1FBRU4sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGNBQWMsQ0FBQztZQUM5QyxVQUFVLEVBQUUsZ0JBQWdCO1NBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBQyxPQUFPO0tBQ2pDO0lBQ0QsaUJBQWlCLEVBQUMsT0FBTztDQUM1QixDQUFDIn0=