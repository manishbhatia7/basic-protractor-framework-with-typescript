"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Demo of promises', function () {
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
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    });
    it('Demo of Promises1', function () {
        add(3, 2);
        add(4, 6);
        var repeat = protractor_1.element(protractor_1.by.repeater('result in memory')).element(protractor_1.by.css("td:nth-child(3)"));
        repeat.getText().then(function (text) {
            console.log(text);
        });
    });
    it('Demo of Promises1', function () {
        add(3, 2);
        add(4, 6);
        history.count().then(function (text) {
            console.log(text);
        });
    });
    it('Demo of Promises2 with single column', function () {
        add(3, 2);
        add(4, 6);
        console.log('3rd test case starts');
        history.each(function (item) {
            item.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });
    });
    it('Demo of Promises with whole row', function () {
        add(3, 2);
        add(4, 6);
        console.log('4th test case starts');
        history.each(function (item) {
            item.getText().then(function (text) {
                console.log(text);
            });
        });
    });
});
