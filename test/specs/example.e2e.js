const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const assert = require('chai').assert


describe('My Login application', () => {
    
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        assert(SecurePage.flashAlert.isExisting() === true)
        assert(SecurePage.flashAlert.getText().includes(`You logged into a secure area!`) === true)
    });

});


