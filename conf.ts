import {Config} from "protractor";


export let config:Config={
    // The address of a running selenium server.
   directConnect:true,
        // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js).
    // They may include glob patterns.
    specs: ['spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};