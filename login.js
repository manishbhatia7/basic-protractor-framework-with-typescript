"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Airline Login', function () {
    var username = protractor_1.element(protractor_1.by.id('txtUsername'));
    var password = protractor_1.element(protractor_1.by.id('txtPassword'));
    var login = protractor_1.element(protractor_1.by.id('btnLogin'));
    it('Login functionality', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://orangehrm-demo-6x.orangehrmlive.com/auth/login');
        username.clear();
        username.sendKeys('admin');
        password.clear();
        password.sendKeys('admin123');
        login.click();
    });
    it('dashboard click', function () {
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'PIM')]")).click();
        protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Employee List')]")).click();
    });
    it('add employee', function () {
        protractor_1.element(protractor_1.by.id('addEmployeeButton')).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.id('firstName')).sendKeys('Jagadeesh');
        protractor_1.element(protractor_1.by.id('lastName')).sendKeys('Kalagi');
        protractor_1.element(protractor_1.by.id('employeeId')).clear();
        protractor_1.element(protractor_1.by.id('employeeId')).sendKeys('001234');
        var dropdown = protractor_1.element(protractor_1.by.xpath("//div[@class='select-wrapper initialized']"));
        dropdown.click();
        var child_dropdown = dropdown.all(protractor_1.by.className('dropdown-content select-dropdown'));
        child_dropdown.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Indian Development Center')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
    });
    it('Add User Details', function () {
        expect(protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Create Login Details')]")).isSelected()).toBe(false);
        var checkbox = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Create Login Details')]"));
        checkbox.click();
        protractor_1.element(protractor_1.by.id('username')).sendKeys('Jagadeesh');
        protractor_1.element(protractor_1.by.id('password')).sendKeys('Testing123');
        protractor_1.element(protractor_1.by.id('confirmPassword')).sendKeys('Testing123');
        var parent_role = protractor_1.element(protractor_1.by.id('adminRoleId_inputfileddiv'));
        var Role = parent_role.element(protractor_1.by.className('select-wrapper initialized'));
        Role.click();
        var child_Role = Role.all(protractor_1.by.className('dropdown-content select-dropdown'));
        child_Role.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Global Admin')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        protractor_1.element(protractor_1.by.id('systemUserSaveBtn')).click();
    });
    it('Add Employee Details Wizard', function () {
        protractor_1.element(protractor_1.by.className('material-icons action-icon date-picker-open-icon')).click();
        protractor_1.browser.sleep(5000);
        var month_parent = protractor_1.element(protractor_1.by.className('select-wrapper picker__select--month'));
        month_parent.click();
        var month_child = month_parent.all(protractor_1.by.className('dropdown-content select-dropdown'));
        month_child.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'January')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var year_parent = protractor_1.element(protractor_1.by.className('select-wrapper picker__select--year'));
        var year_child = year_parent.all(protractor_1.by.className('dropdown-content select-dropdown'));
        year_parent.click();
        year_child.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'1981')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var table = protractor_1.element(protractor_1.by.xpath("(//table[@class='picker__table'])[1]"));
        var table_body = table.element(protractor_1.by.tagName('tbody'));
        var row = table_body.all(protractor_1.by.tagName('td'));
        row.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'2')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
    });
});
