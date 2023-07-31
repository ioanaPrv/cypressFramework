Feature: Login page

    Feature As a user I want to able to login into the application

Scenario: Login with valid credentials 
Given I navigate to the application
When I insert the correct username and password 
And I click "Sign in" button 
Then The user is logged in and redirected to "Home" page

Scenario Outline: Login with invalid credentials
Given I navigate to the application 
When I write '<username>' as username and '<password>' as password
And I click "Signin" button
Then I'm not logged in into the application
And A login error message is displayed successfully 

Examples:
    | username | password |
    | incorrect | incorrect   |
    | Allie2    | incorrect   |  
    | incorrect | s3cret      | 
    | $pecial$$%% | s3cret    |
    | <html></html>| <html></html>|
    | Select * from database| Select * from database   | 

Scenario: Check if the validation errors are displayed 
Given I navigate to the application 
When I click on "Sign in" button 
Then Both mandatory validation errors are displayed

Scenario: Check if the correct elements are displayed in the page 
Given I navigate to the application 
When I observe the login page 
Then The correct elements are displayed in the page 

Scenario: Check the functionality of the "Remember me" checkbox
Given I navigate to the application 
When I click on "Remember me" button 
Then The checkbox is checked successfully 
And The checkbox is unchecked if I click again on "Remember me" button

Scenario: Check if the functionality of "Don't have an account" button
Given I navigate to the application 
When I click "Dont have an account" button 
Then I am redirected to "Sign Up" page

