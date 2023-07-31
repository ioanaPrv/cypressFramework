This project is a basic QA framework developed in JavaScript programming language. I used Cypress as my main automation tool along with Cucumber step definitions and scenarios written in Gherkin language. The locators and tests are written based on the Cypress-Real-World app. So, in order to execute those mock tests you will need to clone the Cypress-Real-World app, and install and run the app. Feel free to use it in your day-to-day routine work. 
Happy testing!

Features: 
Build with JavaScript and Cucumber. Tests are written in Gherkin and Cucumber. 
Provide support also for Mobile testing. WebDriverIO is installed. You just need to update the wdio.conf.js file with your configuration data.

Getting started: 
1. npm install - install all the dependencies
2. All the command scripts can be found in cypress.configs.js
3. In order to open the cypress modal run --npm run cy:open--
4. POM is used as a design pattern. All web elements are stored in /cypress/page-objects folder. The elements are encapsulated in methods where the classes with methods are imported into test files
5. Those are the details for FE tests. Support for BE will be added in the near future

Support for mobile testing:
1. In order to run the mobile mock test you will need to have installed: Android Studio and Appium Server
2. Create a virtual device and provide all the data in wdio.conf.js file from the framework
3. Start the Appium Server and provide all the data in wdio.conf.js file from the framework
4. Run the following command in order to run the test --npm run wdio--


