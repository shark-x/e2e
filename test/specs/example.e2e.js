const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const assert = require('chai').assert

// test suite
describe('My Login application', () => {
    
    // test case 1
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');

        assert(SecurePage.flashAlert.isExisting() === true)
        
        assert(SecurePage.flashAlert.getText().includes(`You logged into a secure area!`) === true)
    });

    // // test case 2
    // it('', ()=>{

    //     // 1. Open LoginPage

    //     // 2. Call login function with not valid parameters

    //     // 3. Сheck that the Flash element appears on the page 

    //     // 4. Сheck that the Flash element contains error message 

    // });
    
});


