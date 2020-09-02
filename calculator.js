"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Demo of promises', function () {
    var firstNumber = protractor_1.element(protractor_1.by.model('first'));
    var secondNumber = protractor_1.element(protractor_1.by.model('second'));
    var goButton = protractor_1.element(protractor_1.by.id("gobutton"));
    var history = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
    var dropdown = protractor_1.element.all(protractor_1.by.tagName("option"));
    function calculator(a, b, c) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        dropdown.each(function (item) {
            item.getAttribute("value").then(function (text) {
                if (text == c) {
                    item.click();
                }
            });
        });
        goButton.click();
    }
    beforeEach(function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    });
    it('calculator functions', function () {
        calculator(1, 2, "MULTIPLICATION");
        calculator(10, 2, "DIVISION");
        history.each(function (item) {
            item.getText().then(function (text) {
                console.log("\n");
                console.log(text);
            });
        });
    });
});
