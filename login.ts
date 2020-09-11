import {browser,element,by,$} from "protractor";
import { monitorEventLoopDelay } from "perf_hooks";
import { DriverProvider } from "protractor/built/driverProviders";


describe('Airline Login',()=>{
    var username=element(by.id('txtUsername'));
    var password=element(by.id('txtPassword'));
    var login=element(by.id('btnLogin'));
       

    
    it('Login functionality',()=>{
        
        browser.waitForAngularEnabled(false);
        browser.get('https://orangehrm-demo-6x.orangehrmlive.com/auth/login');
        username.clear();
        username.sendKeys('admin');
        password.clear();
        password.sendKeys('admin123');
        login.click();      
       

    })
    it('dashboard click',()=>{
        browser.waitForAngularEnabled(true);
        element(by.xpath("//span[contains(text(),'PIM')]")).click();
        element(by.xpath("//span[contains(text(),'Employee List')]")).click();        
        
    })
    it('add employee',()=>{
        element(by.id('addEmployeeButton')).click();
        browser.sleep(3000);
        element(by.id('firstName')).sendKeys('Gulshan');
        element(by.id('lastName')).sendKeys('Kalagi');
        element(by.id('employeeId')).clear();
        element(by.id('employeeId')).sendKeys('001238');
        var dropdown=element(by.xpath("//div[@class='select-wrapper initialized']"));
        dropdown.click();
        var child_dropdown=dropdown.all(by.className('dropdown-content select-dropdown'));
        child_dropdown.each(function()
        {
            browser.driver.sleep(500);
            element(by.xpath("//span[contains(text(),'Indian Development Center')]")).click();
            browser.driver.sleep(500);           

        })
    })    
    it('Add User Details',()=>{    
        expect(element(by.xpath("//label[contains(text(),'Create Login Details')]")).isSelected()).toBe(false);
        var checkbox=element(by.xpath("//label[contains(text(),'Create Login Details')]"));
        checkbox.click();
        element(by.id('username')).sendKeys('Gulshan');
        element(by.id('password')).sendKeys('Testing1234');
        element(by.id('confirmPassword')).sendKeys('Testing1234');
        var parent_role=element(by.id('adminRoleId_inputfileddiv'));
        var Role=parent_role.element(by.className('select-wrapper initialized'));
        Role.click();
        var child_Role=Role.all(by.className('dropdown-content select-dropdown'));     
        child_Role.each(function(){
            browser.driver.sleep(500);
            element(by.xpath("//span[contains(text(),'Global Admin')]")).click();
            browser.driver.sleep(500);  
        })
        element(by.id('systemUserSaveBtn')).click();
        
    })  
    it('Add Employee Details Wizard',()=>
    {
        element(by.className('material-icons action-icon date-picker-open-icon')).click();
        browser.sleep(5000);
        var month_parent=element(by.className('select-wrapper picker__select--month'));
        month_parent.click();
        var month_child=month_parent.all(by.className('dropdown-content select-dropdown'));
        month_child.each(function(){
            browser.driver.sleep(500);
            element(by.xpath("//span[contains(text(),'January')]")).click();
            browser.driver.sleep(500);
        })
        var year_parent=element(by.className('select-wrapper picker__select--year'));
        var year_child=year_parent.all(by.className('dropdown-content select-dropdown'));
        year_parent.click();
        year_child.each(function(){
            browser.driver.sleep(500);
            element(by.xpath("//span[contains(text(),'1981')]")).click();
            browser.driver.sleep(500);
        })
        element(by.xpath("(//div[@class='picker__day picker__day--infocus'])[2]")).click();
        browser.sleep(5000);
        expect(element(by.className('wrapped-word')).getText()).toBe('Important');
        var parent_blood=element(by.id('1_inputfileddiv'));
        parent_blood.click();
        var main_class=parent_blood.element(by.className('select-wrapper initialized'));
        var child_blood=main_class.all(by.className('dropdown-content select-dropdown'));
        child_blood.each(function(){
            browser.driver.sleep(500);
            element(by.xpath("//span[contains(text(),'AB')]")).click();
            browser.driver.sleep(500);  
        })
        var hobby=element(by.id('5'));
        hobby.click();
        hobby.sendKeys('Cycling,Painting');
        var btn_group=element.all(by.id('wizard-nav-button-section'));
        btn_group.each(function()
        {
            browser.driver.sleep(500);
           element(by.xpath("(//button[@class='btn waves-effect waves-light right'])[1]")).click();
            browser.driver.sleep(500);  
       })
       
       var text=element(by.xpath("//label[contains(text(),'Include Contract Details')]"));
       expect(text.getText()).toEqual('Include Contract Details');
       expect(element(by.xpath("//input[@type='checkbox']")).isSelected()).toBe(true);
       var div_Region_parent=element(by.id('9_inputfileddiv'));
       div_Region_parent.click();
       var div_Region_child=div_Region_parent.element(by.className('select-wrapper initialized'));
       var main_Region_class=div_Region_child.all(by.className('dropdown-content select-dropdown'));
       main_Region_class.each(function()
       {
           browser.driver.sleep(500);
           element(by.xpath("//span[contains(text(),'Region-3')]")).click();
           browser.driver.sleep(500);

       })

       var div_FTE_parent=element(by.id('10_inputfileddiv'));
       div_FTE_parent.click();
       var div_FTE_child=div_FTE_parent.element(by.className('select-wrapper initialized'));
       var main_Region_div_class=div_FTE_child.all(by.className('dropdown-content select-dropdown'));
       main_Region_div_class.each(function()
       {
           browser.driver.sleep(500);
           element(by.xpath("//span[contains(text(),'0.75')]")).click();
           browser.driver.sleep(500);

       })

       var div_Department_parent=element(by.id('11_inputfileddiv'));
       div_Department_parent.click();
       var div_Department_child=div_Department_parent.element(by.className('select-wrapper initialized'));
       var main_Department_div_class=div_Department_child.all(by.className('dropdown-content select-dropdown'));
       main_Department_div_class.each(function()
       {
           browser.driver.sleep(500);
           element(by.xpath("//span[contains(text(),'Sub unit-1')]")).click();
           browser.driver.sleep(500);
       })
       var parent_button_class=element.all(by.className('row schema-form-section form-buttons'));
           parent_button_class.each(function(){
           browser.driver.sleep(500);
           element(by.xpath("//button[@class='btn waves-effect waves-light right']")).click();
           browser.driver.sleep(500);
       })
       browser.sleep(7000);

            



    })
        
      
        
        
    
})