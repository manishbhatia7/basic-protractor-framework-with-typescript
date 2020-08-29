import {browser, By,element} from "protractor";



describe("Chain local ors demo",()=>
    {
        it("Open calculator website",async()=>
        {
           browser.get("https://juliemr.github.io/protractor-demo/");

        })
        it("Open Angular link",async()=>
        {
            browser.get("https://angularjs.org/");
            
        })





    }
)