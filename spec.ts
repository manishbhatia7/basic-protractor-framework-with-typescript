import {browser, by,element} from "protractor";



describe("Protractor Demo app",()=>
    {
           var firstNumber=element(by.model('first'));
           var secondNumber=element(by.model('second'));
           var goButton=element(by.id("gobutton"));
           var latestResult=element(by.binding('latest'));

        beforeEach(function()
        {
            browser.get("https://juliemr.github.io/protractor-demo/")

        })

        it("Should have a title",async()=>
        {
           expect(browser.getTitle()).toEqual('Super Calculator');

        })
        it('should have one and two',async()=>
        {
            firstNumber.sendKeys('1');
            secondNumber.sendKeys('2');
            goButton.click();
            expect(latestResult.getText()).toEqual('3');            
        })
        it('should read the value from an input',async()=>
        {
            firstNumber.sendKeys('1');
            expect(firstNumber.getAttribute('value')).toEqual('1');

        })
        
    });
    