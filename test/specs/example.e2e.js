const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const assert = require('chai').assert

// test suite
describe('My Login application', () => {
            
    // test case 1
    it('should login with valid credentials', () => {
        
        LoginPage.open();  // Open Login Page
        
        LoginPage.login('tomsmith', 'SuperSecretPassword!');  // Fill Login form and submit
        
        assert(SecurePage.flashAlert.isExisting() === true)   // Check for the presence of the Flash element
        
        assert(SecurePage.flashAlert.getText().includes(`You logged into a secure area!`) === true)  // Check the content of a Flash element
    });

    // // test case 2
    // it('', ()=>{

    //     // 1. Open LoginPage

    //     // 2. Call login function with not valid parameters

    //     // 3. Сheck that the Flash element appears on the page 

    //     // 4. Сheck that the Flash element contains error message 

    // });
    
});


