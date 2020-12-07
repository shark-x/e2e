# E2E: node.js + wdio:sync mode + mocha + chai

This is base environment for fast start to write e2e autotest on node.js and wdio fraemwork

## Requirements

Must installed: node.js, chrome|firefox, Java(jre)

## Getting Started

Clone this repository on your local mashine

    $ git clone https://github.com/shark-x/e2e

Install all dependencies

    $ npm install

Run a test case to verify that the installation was successful

    $ npm test

## Quick Started

### Description test case "test/specs/example.e2e.js"

Next code is Test suite "My Login application" witch contains one test "should login with valid credentials". This test case checks succeeded user login.
```javascript
const LoginPage = require('../pageobjects/login.page');    // import LoginPage class
const SecurePage = require('../pageobjects/secure.page');  // import SecurePage class
const assert = require('chai').assert                      // import assertion method from chai library

// test suite
describe('My Login application', () => {

    // test case 1
    it('should login with valid credentials', () => {
        
        LoginPage.open();  // Opens Login Page
        
        LoginPage.login('tomsmith', 'SuperSecretPassword!');  // Fills Login form and submit
        
        assert(SecurePage.flashAlert.isExisting() === true)   // Checks for the presence of the Flash element
        
        assert(SecurePage.flashAlert.getText().includes(`You logged into a secure area!`) === true)  // Checks the content of a Flash element
    });

});
```

### Write your first test.

- Open test suite test/specs/example.e2e.js.
- Uncomment 19-30 lines.
- Add test case name in first "it" parameter. Write 'login with not valid credentials'
- In the second "it" parameter add a test step after each comment.    
- Run test