import {browser,by,element} from "protractor";
describe('Demo of promises',()=>{
    var firstNumber=element(by.model('first'));
    var secondNumber=element(by.model('second'));
    var goButton=element(by.id("gobutton"));
    var history=element.all(by.repeater('result in memory'));
    var dropdown=element.all(by.tagName("option"));
    function calculator(a,b,c)
    {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        dropdown.each(function(item)
        {
            item.getAttribute("value").then(function(text)
            {
                if(text==c)
                {
                    item.click();
                }
            })

        })
        goButton.click();

    }
    
    beforeEach(function()
    {
        browser.get('https://juliemr.github.io/protractor-demo/');

    })
    it('calculator functions',()=>{
        
        calculator(1,2,"MULTIPLICATION");
        calculator(10,2,"DIVISION");
        history.each(function(item)
        {
            item.getText().then(function(text)
            {
                console.log("\n");
                console.log(text);

            })

        })

    })
})    
