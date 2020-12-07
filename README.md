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

### Description test "test/specs/example.e2e.js"

Next code is Test suite "My Login application" witch contains one test "should login with valid credentials". This test case checks succeeded user login.

    describe('My Login application', () => {
    
        it('should login with valid credentials', () => {
            LoginPage.open();

            LoginPage.login('tomsmith', 'SuperSecretPassword!');
            assert(SecurePage.flashAlert.isExisting() === true)
            assert(SecurePage.flashAlert.getText().includes(`You logged into a secure area!`) === true)
        });

    });

The first line opens the Login page.
The second line calls the "Login" method of the "LoginPage" class and passes the login and password parameters to it.
The third line checks for the presence of the Flash element.
Fourth line checks if the Flash element contains the text "You have entered the safe area!"

### Write your first test.

- Open file test/specs/example.e2e.js. This is test suites file.
- Uncomment 16-27 lines.
- Add test case name in first "it" parameters. Write 'login with not valid credentials'
- In the second "it" parameter, add a test step after each comment.
    
    it('', ()=>{

        // 1. Open LoginPage

        // 2. Call login function with not valid parameters

        // 3. Сheck that the Flash element appears on the page 

        // 4. Сheck that the Flash element contains error message 

    })
    
- Run test