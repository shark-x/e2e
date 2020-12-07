#  E2E: node.js + wdio:sync mode + mocha + chai

This is base environment for fast start to write e2e autotest on node.js and wdio fraemwork

## Requirements
Must installed: node.js, chrome|firefox, Java(jre), Python v3

## Getting Started
Clone this repository on your local mashine

    $ git clone https://github.com/shark-x/e2e

Install all dependencies

    $ npm install

Run a test case to verify that the installation was successful

    $ npm test

## Quick Start

Description of some libraries used in the project 

**@wdio/cli** - WebdriverIO testrunner command line interface
**@wdio/local-runner** - A WebdriverIO runner to run tests locally
**@wdio/selenium-standalone-service** - This service helps you to run Selenium seamlessly when running tests with the WDIO testrunner. If you use this service you don't need any other driver services (e.g. wdio-chromedriver-service) anymore. All local browser can be started using this service.
**@wdio/spec-reporter** - A WebdriverIO plugin to report in spec style
**@wdio/mocha-framework** - A WebdriverIO plugin. Adapter for Mocha testing framework.
**chai** - А BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework