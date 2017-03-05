# Regression Tests

### Prerequisites

Protractor is a Node.js program. To run, you will need to have Node.js installed https://nodejs.org/en/. You will download Protractor package using npm, which comes with Node.js. Check the version of Node.js you have by running node --version. Then, check the compatibility notes in the Protractor README to make sure your version of Node.js is compatible with Protractor.


### Setup

Use npm to install Protractor globally with: `npm install -g protractor`


This will install two command line tools, protractor and webdriver-manager. Try running `protractor --version` to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with: `webdriver-manager update`


### Running the tests

1. Open up a new command prompt. Now start up a server with: `webdriver-manager start`
2. Download this repository
3. Open up another command prompt and CD to where the conf.js file is in the QATestingCaseKata repository
4. Run the tests with: `protractor conf.js`
