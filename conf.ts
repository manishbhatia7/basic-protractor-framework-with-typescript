import {Config, browser} from "protractor";


export let config:Config={
    // The address of a running selenium server.
   directConnect:true,
        // Capabilities to be passed to the webdriver instance.
      // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js).
    // They may include glob patterns.
    specs: ['login.js'],
    onPrepare()
    {
        browser.driver.manage().window().maximize();

    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
       allScriptsTimeout:600000,
       defaultTimeoutInterval:600000,
    }
};