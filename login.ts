import {browser,element,by,$} from "protractor";
import { monitorEventLoopDelay } from "perf_hooks";


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
        element(by.id('firstName')).sendKeys('Jagadeesh');
        element(by.id('lastName')).sendKeys('Kalagi');
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
        element(by.id('username')).sendKeys('Jagadeesh');
        element(by.id('password')).sendKeys('Testing123');
        element(by.id('confirmPassword')).sendKeys('Testing123');
        var parent_role=element(by.id('adminRoleId_inputfileddiv'));
        var Role=parent_role.element(by.className('select-wrapper initialized'));
        Role.click();
        var child_Role=Role.all(by.className('dropdown-content select-dropdown'));     
        child_Role.each(function(){
            browser.driver.sleep(500);
            element(by.xpath("//span[contains(text(),'Global Admin')]")).click();
            browser.driver.sleep(500);  
        })
        browser.sleep(5000);
    })  
        
      
        
        
    
})