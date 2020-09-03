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
        protractor_1.element(protractor_1.by.xpath("(//div[@class='picker__day picker__day--infocus'])[2]")).click();
        protractor_1.browser.sleep(5000);
        expect(protractor_1.element(protractor_1.by.className('wrapped-word')).getText()).toBe('Important');
        var parent_blood = protractor_1.element(protractor_1.by.id('1_inputfileddiv'));
        parent_blood.click();
        var main_class = parent_blood.element(protractor_1.by.className('select-wrapper initialized'));
        var child_blood = main_class.all(protractor_1.by.className('dropdown-content select-dropdown'));
        child_blood.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'AB')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var hobby = protractor_1.element(protractor_1.by.id('5'));
        hobby.click();
        hobby.sendKeys('Cycling,Painting');
        var btn_group = protractor_1.element.all(protractor_1.by.id('wizard-nav-button-section'));
        btn_group.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("(//button[@class='btn waves-effect waves-light right'])[1]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var text = protractor_1.element(protractor_1.by.xpath("//label[contains(text(),'Include Contract Details')]"));
        //expect(text.isSelected()).toBe(true);
        var div_Region_parent = protractor_1.element(protractor_1.by.id('9_inputfileddiv'));
        div_Region_parent.click();
        var div_Region_child = div_Region_parent.element(protractor_1.by.className('select-wrapper initialized'));
        var main_Region_class = div_Region_child.all(protractor_1.by.className('dropdown-content select-dropdown'));
        main_Region_class.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Region-3')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var div_FTE_parent = protractor_1.element(protractor_1.by.id('10_inputfileddiv'));
        div_FTE_parent.click();
        var div_FTE_child = div_FTE_parent.element(protractor_1.by.className('select-wrapper initialized'));
        var main_Region_div_class = div_FTE_child.all(protractor_1.by.className('dropdown-content select-dropdown'));
        main_Region_div_class.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'0.75')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var div_Department_parent = protractor_1.element(protractor_1.by.id('11_inputfileddiv'));
        div_Department_parent.click();
        var div_Department_child = div_Department_parent.element(protractor_1.by.className('select-wrapper initialized'));
        var main_Department_div_class = div_Department_child.all(protractor_1.by.className('dropdown-content select-dropdown'));
        main_Department_div_class.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Sub unit-1')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
        var parent_button_class = protractor_1.element.all(protractor_1.by.className('row schema-form-section form-buttons'));
        parent_button_class.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//button[@class='btn waves-effect waves-light right']")).click();
            protractor_1.browser.driver.sleep(500);
        });
        protractor_1.browser.sleep(7000);
    });
});
