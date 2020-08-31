import {browser,by,element} from "protractor";
describe('Demo of promises',()=>{
    var firstNumber=element(by.model('first'));
    var secondNumber=element(by.model('second'));
    var goButton=element(by.id("gobutton"));
    var latestResult=element(by.binding('latest'));
    var history=element.all(by.repeater('result in memory'));
    function add(a,b)
    {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }
    beforeEach(function()
    {
        browser.get('https://juliemr.github.io/protractor-demo/');

    })
    it('Demo of Promises1',()=>{
        add(3,2);
        add(4,6);
       var repeat=element(by.repeater('result in memory')).element(by.css("td:nth-child(3)"))
       repeat.getText().then(function(text){
           console.log(text);
       })

    })
    it('Demo of Promises1',()=>{
        add(3,2);
        add(4,6);
        history.count().then(function(text)
        {
            console.log(text);
        })
        
    })
    it('Demo of Promises2 with single column',()=>{
        add(3,2);
        add(4,6);
        console.log('3rd test case starts');
       history.each(function(item)
       {
           item.element(by.css("td:nth-child(3)")).getText().then(function(text)
           {
               console.log(text);

           })
       })
    })
    it('Demo of Promises with whole row',()=>{
        add(3,2);
        add(4,6);
        console.log('4th test case starts');
       history.each(function(item)
       {
           item.getText().then(function(text)
           {
               console.log(text);
           })
       })
    })

    

    

})
