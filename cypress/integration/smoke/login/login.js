import { After, And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import BasePage from '../../../page-objects/pages/basePage'
import LoginPage from '../../../page-objects/pages/loginPage'
import HomePage from "../../../page-objects/pages/homePage"

const basePage = new BasePage()
const loginPage = new LoginPage()
const homePage = new HomePage()

//Not working with arrow function. Spike
beforeEach(function () {
    cy.fixture('loginData').then((data) => {
        this.data = data
    })
})

//1
Given('I navigate to the application', () => {
    basePage.navigateToApp("/")
})
When('I insert the correct username and password', function() 
{
    loginPage.getUsernameField().type(this.data.Username)
    loginPage.getUsernameField().should("not.be.null")
    loginPage.getPasswordField().type(this.data.Password)
    loginPage.getPasswordField().should("not.be.null")
})
And('I click "Sign in" button', () => {
    loginPage.getSignInButton().click()
})
Then('The user is logged in and redirected to "Home" page', () => {
    homePage.getHomeButton().should("be.visible")
})

//2
When('I write {string} as username and {string} as password', (username, password) => {
    loginPage.getUsernameField().type(username)
    loginPage.getUsernameField().should("not.be.null")
    loginPage.getPasswordField().type(password)
    loginPage.getPasswordField().should("not.be.null")
})
And('I click "Signin" button', () => {
    loginPage.getSignInButton().click()
})
Then("I'm not logged in into the application", () => {
    basePage.assertUrl("/signin")
})
And('A login error message is displayed successfully', () => {
    loginPage.getValidationErrorIcon().should("be.visible")
    loginPage.getValidationErrorMessage().invoke("text").should("equal", "Username or password is invalid")
})

//3
When('I click on "Sign in" button', () => {
    loginPage.getSignInButton().click()
})
//Bug. No mandatory error for password field
Then('Both mandatory validation errors are displayed', () => {
    loginPage.getUsernameMandatoryValidationError().should("be.visible")
    loginPage.getUsernameMandatoryValidationError().invoke('text').should('equal', "Username is required")
    // loginPage.getPasswordMandatoryValidationError().should("be.visible")
    // loginPage.getPasswordMandatoryValidationError().invoke('text').should('equal', "Password is required")
})

//4
When("I observe the login page", () => {
    basePage.assertUrl("/signin")
})
Then("The correct elements are displayed in the page", () => {
    loginPage.assertUiElements()
})

//5
When('I click on "Remember me" button', () => {
    loginPage.getRememberMeButton().click()
})
Then('The checkbox is checked successfully', () => {
    loginPage.getRememberMeCheckBox().invoke("hasClass", "Mui-checked")
})
And('The checkbox is unchecked if I click again on "Remember me" button', () => {
    loginPage.getRememberMeButton().click()
    loginPage.getRememberMeCheckBox().should("not.have.class", "Mui-checked")
})

//6 
When('I click "Dont have an account" button', () => {
    loginPage.getDontHaveAccountButton().click()
})
Then('I am redirected to "Sign Up" page', () => {
    basePage.assertUrl("/signup")
})