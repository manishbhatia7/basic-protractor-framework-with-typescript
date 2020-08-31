"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe("Protractor Demo app", function () {
    var firstNumber = protractor_1.element(protractor_1.by.model('first'));
    var secondNumber = protractor_1.element(protractor_1.by.model('second'));
    var goButton = protractor_1.element(protractor_1.by.id("gobutton"));
    var latestResult = protractor_1.element(protractor_1.by.binding('latest'));
    var history = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }
    beforeEach(function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    });
    it('add two numbers', function () {
        add(1, 2);
        add(3, 4);
        expect(history.count()).toEqual(2);
        add(5, 6);
        expect(history.count()).toEqual(3);
        expect(history.last().getText()).toContain(' 1 + 2');
    });
});
