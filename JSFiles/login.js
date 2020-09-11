"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Airline Login', () => {
    var username = protractor_1.element(protractor_1.by.id('txtUsername'));
    var password = protractor_1.element(protractor_1.by.id('txtPassword'));
    var login = protractor_1.element(protractor_1.by.id('btnLogin'));
    it('Login functionality', () => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://orangehrm-demo-6x.orangehrmlive.com/auth/login');
        username.clear();
        username.sendKeys('admin');
        password.clear();
        password.sendKeys('admin123');
        login.click();
    });
    it('dashboard click', () => {
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'PIM')]")).click();
        protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Employee List')]")).click();
    });
    it('add employee', () => {
        protractor_1.element(protractor_1.by.id('addEmployeeButton')).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.id('firstName')).sendKeys('Gulshan');
        protractor_1.element(protractor_1.by.id('lastName')).sendKeys('Kalagi');
        protractor_1.element(protractor_1.by.id('employeeId')).clear();
        protractor_1.element(protractor_1.by.id('employeeId')).sendKeys('001235');
        var dropdown = protractor_1.element(protractor_1.by.xpath("//div[@class='select-wrapper initialized']"));
        dropdown.click();
        var child_dropdown = dropdown.all(protractor_1.by.className('dropdown-content select-dropdown'));
        child_dropdown.each(function () {
            protractor_1.browser.driver.sleep(500);
            protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Indian Development Center')]")).click();
            protractor_1.browser.driver.sleep(500);
        });
    });
    it('Add User Details', () => {
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
    it('Add Employee Details Wizard', () => {
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
        expect(text.getText()).toEqual('Include Contract Details');
        expect(protractor_1.element(protractor_1.by.xpath("//input[@type='checkbox']")).isSelected()).toBe(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFnRDtBQUtoRCxRQUFRLENBQUMsZUFBZSxFQUFDLEdBQUUsRUFBRTtJQUN6QixJQUFJLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFJLEtBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUlyQyxFQUFFLENBQUMscUJBQXFCLEVBQUMsR0FBRSxFQUFFO1FBRXpCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUN0RSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFHbEIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsaUJBQWlCLEVBQUMsR0FBRSxFQUFFO1FBQ3JCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDLEtB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